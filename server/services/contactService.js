const Message = require('../models/Message');

class ContactService {
  async sendMessage({ name, email, subject, message }) {
    return Message.create({ name, email, subject, message });
  }

  async getAllMessages() {
    return Message.find().sort({ createdAt: -1 });
  }

  async getUnreadCount() {
    return Message.countDocuments({ read: false });
  }

  async markAsRead(id) {
    const msg = await Message.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    if (!msg) {
      throw Object.assign(new Error('Message not found'), { statusCode: 404 });
    }
    return msg;
  }
}

module.exports = new ContactService();
