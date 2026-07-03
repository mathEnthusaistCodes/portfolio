const BASE_URL = process.env.REACT_APP_API_URL || '/api';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;
    const config = {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    };

    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.error?.message || 'Request failed',
        response.status,
        data.errors
      );
    }

    return data;
  }

  get(endpoint) {
    return this.request(endpoint);
  }

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  patch(endpoint, body) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  getProfile() {
    return this.get('/profile');
  }

  getSkills() {
    return this.get('/profile/skills');
  }

  getExperience() {
    return this.get('/profile/experience');
  }

  getEducation() {
    return this.get('/profile/education');
  }

  getProjects(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    return this.get(`/projects${params ? `?${params}` : ''}`);
  }

  getFeaturedProjects() {
    return this.get('/projects/featured');
  }

  getProjectStats() {
    return this.get('/projects/stats');
  }

  sendMessage(data) {
    return this.post('/contact', data);
  }
}

class ApiError extends Error {
  constructor(message, status, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

export const api = new ApiService();
export default api;
