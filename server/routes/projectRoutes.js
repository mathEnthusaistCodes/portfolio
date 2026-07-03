const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/projectController');
const { validate } = require('../middleware/validate');

const router = Router();

router.get('/', controller.getAll);
router.get('/featured', controller.getFeatured);
router.get('/categories', controller.getCategories);
router.get('/stats', controller.getStats);
router.get('/:id', controller.getById);

router.post(
  '/',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('category').trim().notEmpty().withMessage('Category is required'),
    validate,
  ],
  controller.create
);

router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
