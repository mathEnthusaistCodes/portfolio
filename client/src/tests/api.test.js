import api from '../services/api';

global.fetch = jest.fn();

describe('ApiService', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('getProfile calls /profile endpoint', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true, data: { name: 'Kaushik' } }),
    });

    const result = await api.getProfile();
    expect(fetch).toHaveBeenCalledWith('/api/profile', expect.any(Object));
    expect(result.data.name).toBe('Kaushik');
  });

  test('getSkills calls /profile/skills', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true, data: [{ name: 'React', category: 'Frontend', level: 4 }] }),
    });

    const result = await api.getSkills();
    expect(fetch).toHaveBeenCalledWith('/api/profile/skills', expect.any(Object));
    expect(result.data[0].name).toBe('React');
  });

  test('getProjects calls /projects endpoint', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true, data: [] }),
    });

    const result = await api.getProjects();
    expect(fetch).toHaveBeenCalledWith('/api/projects', expect.any(Object));
    expect(Array.isArray(result.data)).toBe(true);
  });

  test('sendMessage sends POST request', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true, data: { name: 'Test' } }),
    });

    const payload = { name: 'Test', email: 'test@test.com', subject: 'Hi', message: 'Hello' };
    const result = await api.sendMessage(payload);
    expect(fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    expect(result.success).toBe(true);
  });

  test('throws ApiError on non-ok response', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: () => Promise.resolve({ error: { message: 'Validation failed' } }),
    });

    await expect(api.getProfile()).rejects.toThrow('Validation failed');
  });
});
