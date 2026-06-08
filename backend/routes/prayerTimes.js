const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/:country/:city', async (req, res) => {
  try {
    const { country, city } = req.params
    const today = new Date()
    const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`

    const response = await axios.get(
      `${process.env.ALADHAN_API_URL}/timingsByCity/${date}`,
      {
        params: { city, country, method: 5 },
      }
    )

    res.json({ success: true, data: response.data.data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router