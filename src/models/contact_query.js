// models/contact_query.js

import mongoose from "mongoose";

const contactQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactQuery = mongoose.models.ContactQuery || mongoose.model('ContactQuery', contactQuerySchema);

export default ContactQuery;
