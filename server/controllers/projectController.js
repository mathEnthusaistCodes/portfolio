const projectService = require('../services/projectService');

exports.getAll = async (req, res, next) => {
  try {
    const projects = await projectService.getAll(req.query);
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const project = await projectService.getById(req.params.id);
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const project = await projectService.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const project = await projectService.update(req.params.id, req.body);
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await projectService.delete(req.params.id);
    res.json({ success: true, message: 'Project deleted' });
  } catch (err) {
    next(err);
  }
};

exports.getFeatured = async (req, res, next) => {
  try {
    const projects = await projectService.getFeatured();
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await projectService.getCategories();
    res.json({ success: true, data: categories });
  } catch (err) {
    next(err);
  }
};

exports.getStats = async (req, res, next) => {
  try {
    const stats = await projectService.getStats();
    res.json({ success: true, data: stats });
  } catch (err) {
    next(err);
  }
};
