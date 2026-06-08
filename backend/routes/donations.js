const express = require('express')
const router = express.Router()

router.get('/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'مساعدة الأيتام', icon: '👶' },
    { id: 2, name: 'إطعام الفقراء', icon: '🍽️' },
    { id: 3, name: 'دعم الطلاب', icon: '📚' },
  ]
  res.json({ success: true, data: categories })
})

router.post('/donate', (req, res) => {
  res.json({ success: true, message: 'تم تسجيل التبرع بنجاح' })
})

module.exports = router