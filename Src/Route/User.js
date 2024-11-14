const express = require("express");
const route = express.Router();
const { register, login, logout, otpverifyEmail } = require("../Controller/User");

route.post('/register', register);
route.post('/login', login);
route.get('/logout', logout)
route.post('/register-otp',otpverifyEmail)

module.exports = route;
