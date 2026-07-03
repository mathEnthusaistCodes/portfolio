const request = require('supertest');
const app = require('../app');

jest.mock('../models/Profile', () => {
  const mockProfile = {
    _id: '507f1f77bcf86cd799439011',
    name: 'Kaushik Nagarajan',
    title: 'Engineering Manager',
    summary: 'Test summary',
    email: 'kaushik16.n@gmail.com',
    skills: [{ name: 'React', category: 'Frontend', level: 4 }],
    experience: [{ company: 'TestCo', role: 'Engineer', startDate: new Date('2020-01-01') }],
    education: [{ institution: 'UTD', degree: 'M.S.', field: 'EE', startYear: 2009, endYear: 2011 }],
    save: jest.fn().mockResolvedValue(this),
  };

  return {
    findOne: jest.fn().mockResolvedValue(mockProfile),
    create: jest.fn().mockResolvedValue(mockProfile),
  };
});

describe('Profile API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/profile - returns profile', async () => {
    const res = await request(app).get('/api/profile');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.name).toBe('Kaushik Nagarajan');
  });

  test('GET /api/profile/skills - returns skills', async () => {
    const res = await request(app).get('/api/profile/skills');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/profile/experience - returns experience', async () => {
    const res = await request(app).get('/api/profile/experience');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('GET /api/profile/education - returns education', async () => {
    const res = await request(app).get('/api/profile/education');
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});
