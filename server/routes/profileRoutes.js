const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/profileController');
const { validate } = require('../middleware/validate');

const router = Router();

router.get('/', controller.getProfile);

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('summary').trim().notEmpty().withMessage('Summary is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    validate,
  ],
  controller.createOrUpdateProfile
);

router.get('/skills', controller.getSkills);
router.get('/experience', controller.getExperience);
router.get('/education', controller.getEducation);

module.exports = router;
