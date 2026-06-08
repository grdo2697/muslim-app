const express = require('express')
const router = express.Router()

router.get('/surahs', (req, res) => {
  const surahs = [
    { id: 1, name: 'الفاتحة', verses: 7 },
    { id: 2, name: 'البقرة', verses: 286 },
    { id: 3, name: 'آل عمران', verses: 200 },
  ]
  res.json({ success: true, data: surahs })
})

router.get('/surah/:id', (req, res) => {
  res.json({
    success: true,
    data: {
      id: req.params.id,
      name: 'سورة الفاتحة',
      verses: [{ number: 1, text: 'بسم الله الرحمن الرحيم' }],
    },
  })
})

module.exports = router