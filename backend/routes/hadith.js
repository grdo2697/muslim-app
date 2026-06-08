const express = require('express')
const router = express.Router()

router.get('/collections', (req, res) => {
  const collections = [
    { id: 1, name: 'صحيح البخاري' },
    { id: 2, name: 'صحيح مسلم' },
  ]
  res.json({ success: true, data: collections })
})

module.exports = router