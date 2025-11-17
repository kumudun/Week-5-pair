/* {
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active",
  "account_verified": true,
  "company": "Nordic Travel Ltd"
} */

 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
 name: {
     type: String,
     required: true,
 },
 email: {
     type: String,
     required: true,
     unique: true, // ensures no duplicate emails
 },
 password: {
     type: String,
     required: true,
 },
 phone_number: {
     type: String,
     required: true,
 },
 gender: {
     type: String,
     enum: ['Male', 'Female', 'Other'], // restricts to known values
     required: true,
 },
 date_of_birth: {
     type: Date,
     required: true,
 },
 membership_status: {
     type: String,
     enum: ['Active', 'Inactive', 'Suspended'],
     default: 'Active',
 },
 account_verified: {
     type: Boolean,
     default: false,
 },
 company: {
     type: String,
 },
 }, {
 timestamps: true // adds createdAt and updatedAt automatically
 });

 const User = mongoose.model('User', userSchema);
 module.exports = User;