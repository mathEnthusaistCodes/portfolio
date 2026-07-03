const contactService = require('../services/contactService');

exports.sendMessage = async (req, res, next) => {
  try {
    const message = await contactService.sendMessage(req.body);
    res.status(201).json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await contactService.getAllMessages();
    res.json({ success: true, data: messages });
  } catch (err) {
    next(err);
  }
};

exports.getUnreadCount = async (req, res, next) => {
  try {
    const count = await contactService.getUnreadCount();
    res.json({ success: true, data: { unread: count } });
  } catch (err) {
    next(err);
  }
};

exports.markAsRead = async (req, res, next) => {
  try {
    const message = await contactService.markAsRead(req.params.id);
    res.json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
};
