const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/contactController');
const { validate } = require('../middleware/validate');

const router = Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
    validate,
  ],
  controller.sendMessage
);

router.get('/', controller.getAllMessages);
router.get('/unread', controller.getUnreadCount);
router.patch('/:id/read', controller.markAsRead);

module.exports = router;
