/**
 * 🕌 Occasions Routes
 * مسارات المناسبات الإسلامية
 */

const express = require('express');
const router = express.Router();

/**
 * GET /api/occasions
 * الحصول على المناسبات الإسلامية
 */
router.get('/', (req, res) => {
  try {
    const occasions = [
      {
        id: 1,
        name: 'رمضان المبارك',
        date: '01/09/2024',
        hijri: '1/1/1446',
        description: 'شهر الصيام والقيام',
        icon: '🌙',
      },
      {
        id: 2,
        name: 'عيد الفطر',
        date: '30/09/2024',
        hijri: '1/10/1446',
        description: 'عيد المسلمين الأول',
        icon: '🎉',
      },
      {
        id: 3,
        name: 'عيد الأضحى',
        date: '15/06/2024',
        hijri: '10/12/1445',
        description: 'عيد المسلمين الثاني',
        icon: '🐑',
      },
      {
        id: 4,
        name: 'ليلة القدر',
        date: '27/09/2024',
        hijri: '27/9/1446',
        description: 'أعظم ليلة في السنة',
        icon: '✨',
      },
      {
        id: 5,
        name: 'ذكرى استشهاد الإمام الحسين',
        date: '09/10/2024',
        hijri: '10/1/1446',
        description: 'ذكرى عاشوراء',
        icon: '🕯️',
      },
    ];

    res.json({
      success: true,
      data: occasions,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/occasions/:id
 * الحصول على تفاصيل مناسبة معينة
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    res.json({
      success: true,
      data: {
        id,
        name: 'رمضان المبارك',
        date: '01/09/2024',
        hijri: '1/1/1446',
        description: 'شهر الصيام والقيام والتراويح والقرآن',
        program: [
          {
            day: 1,
            title: 'استقبال الشهر الكريم',
            description: 'استقبال رمضان بالدعاء والاستعداد',
          },
          // ... برنامج اليومي للشهر
        ],
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
