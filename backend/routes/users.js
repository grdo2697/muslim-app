const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
  res.json({ success: true, message: 'تم التسجيل بنجاح' })
})

router.post('/login', (req, res) => {
  res.json({ success: true, message: 'تم تسجيل الدخول بنجاح' })
})

router.get('/:uid', (req, res) => {
  res.json({ success: true, data: { uid: req.params.uid } })
})

module.exports = router