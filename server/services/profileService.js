const Profile = require('../models/Profile');

class ProfileService {
  async getProfile() {
    const profile = await Profile.findOne();
    if (!profile) {
      throw Object.assign(new Error('Profile not found'), { statusCode: 404 });
    }
    return profile;
  }

  async createOrUpdate(data) {
    let profile = await Profile.findOne();
    if (profile) {
      Object.assign(profile, data);
      return profile.save();
    }
    return Profile.create(data);
  }

  async getSkills() {
    const profile = await this.getProfile();
    return profile.skills;
  }

  async getExperience() {
    const profile = await this.getProfile();
    return profile.experience;
  }

  async getEducation() {
    const profile = await this.getProfile();
    return profile.education;
  }
}

module.exports = new ProfileService();
