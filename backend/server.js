const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'مسلم Backend Server',
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/prayer-times', require('./routes/prayerTimes'))
app.use('/api/quran', require('./routes/quran'))
app.use('/api/azkar', require('./routes/azkar'))
app.use('/api/users', require('./routes/users'))
app.use('/api/donations', require('./routes/donations'))
app.use('/api/occasions', require('./routes/occasions'))
app.use('/api/hadith', require('./routes/hadith'))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'حدث خطأ ما' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Backend Server running on port ${PORT}`)
})

module.exports = app