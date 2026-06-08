const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const occasions = [
    { id: 1, name: 'رمضان المبارك', date: '01/09/2024' },
    { id: 2, name: 'عيد الفطر', date: '30/09/2024' },
  ]
  res.json({ success: true, data: occasions })
})

module.exports = router