const Project = require('../models/Project');

class ProjectService {
  async getAll(filters = {}) {
    const query = {};
    if (filters.category) query.category = filters.category;
    if (filters.featured) query.featured = true;
    if (filters.status) query.status = filters.status;
    if (filters.search) {
      query.$or = [
        { title: { $regex: filters.search, $options: 'i' } },
        { description: { $regex: filters.search, $options: 'i' } },
        { technologies: { $regex: filters.search, $options: 'i' } },
      ];
    }
    return Project.find(query).sort({ featured: -1, createdAt: -1 });
  }

  async getById(id) {
    const project = await Project.findById(id);
    if (!project) {
      throw Object.assign(new Error('Project not found'), { statusCode: 404 });
    }
    return project;
  }

  async create(data) {
    return Project.create(data);
  }

  async update(id, data) {
    const project = await Project.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      throw Object.assign(new Error('Project not found'), { statusCode: 404 });
    }
    return project;
  }

  async delete(id) {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw Object.assign(new Error('Project not found'), { statusCode: 404 });
    }
    return project;
  }

  async getFeatured() {
    return Project.find({ featured: true }).sort({ createdAt: -1 });
  }

  async getCategories() {
    return Project.distinct('category');
  }

  async getStats() {
    const [total, featured, categories] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ featured: true }),
      Project.distinct('category'),
    ]);
    return { totalProjects: total, featuredCount: featured, categories };
  }
}

module.exports = new ProjectService();
