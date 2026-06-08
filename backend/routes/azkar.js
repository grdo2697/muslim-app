const express = require('express')
const router = express.Router()

router.get('/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'أذكار الصباح', icon: '🌅' },
    { id: 2, name: 'أذكار المساء', icon: '🌙' },
  ]
  res.json({ success: true, data: categories })
})

router.get('/category/:id', (req, res) => {
  res.json({
    success: true,
    data: {
      categoryId: req.params.id,
      azkar: [
        { id: 1, text: 'سبحان الله وبحمده', count: 33 },
      ],
    },
  })
})

module.exports = router