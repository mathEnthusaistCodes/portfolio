const request = require('supertest');
const app = require('../app');

jest.mock('../models/Project', () => {
  const mockProjects = [
    {
      _id: '507f1f77bcf86cd799439012',
      title: 'Test Project',
      description: 'A test project',
      category: 'Web Development',
      technologies: ['React', 'Node.js'],
      featured: true,
      status: 'completed',
    },
  ];

  const mockModel = {
    find: jest.fn().mockReturnThis(),
    sort: jest.fn().mockReturnThis(),
    findById: jest.fn().mockResolvedValue(mockProjects[0]),
    findByIdAndUpdate: jest.fn().mockResolvedValue(mockProjects[0]),
    findByIdAndDelete: jest.fn().mockResolvedValue(mockProjects[0]),
    create: jest.fn().mockResolvedValue(mockProjects[0]),
    countDocuments: jest.fn().mockResolvedValue(1),
    distinct: jest.fn().mockResolvedValue(['Web Development']),
  };

  return Object.assign(mockModel, {
    find: jest.fn().mockImplementation(() => ({
      sort: jest.fn().mockResolvedValue(mockProjects),
    })),
  });
});

describe('Projects API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/projects - returns all projects', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/projects/featured - returns featured projects', async () => {
    const res = await request(app).get('/api/projects/featured');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('GET /api/projects/categories - returns categories', async () => {
    const res = await request(app).get('/api/projects/categories');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('GET /api/projects/stats - returns stats', async () => {
    const res = await request(app).get('/api/projects/stats');
    expect(res.status).toBe(200);
    expect(res.body.data.totalProjects).toBe(1);
  });

  test('GET /api/projects/:id - returns a single project', async () => {
    const res = await request(app).get('/api/projects/507f1f77bcf86cd799439012');
    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe('Test Project');
  });
});
