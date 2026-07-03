const profileService = require('../services/profileService');

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await profileService.getProfile();
    res.json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }
};

exports.createOrUpdateProfile = async (req, res, next) => {
  try {
    const profile = await profileService.createOrUpdate(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }
};

exports.getSkills = async (req, res, next) => {
  try {
    const skills = await profileService.getSkills();
    res.json({ success: true, data: skills });
  } catch (err) {
    next(err);
  }
};

exports.getExperience = async (req, res, next) => {
  try {
    const experience = await profileService.getExperience();
    res.json({ success: true, data: experience });
  } catch (err) {
    next(err);
  }
};

exports.getEducation = async (req, res, next) => {
  try {
    const education = await profileService.getEducation();
    res.json({ success: true, data: education });
  } catch (err) {
    next(err);
  }
};
