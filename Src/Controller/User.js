const { request } = require("express");
const User = require("../Model/User");
const { sendotp } = require("../config/email_config")

const otpstore = {}


//  login
const login = async (req, res) => {
    let { username, password } = req.body;
    let findUser = await User.findOne({username});

    if (!findUser) {
        return res.status(404).json({ msg: "User does not exist. Please provide valid details." });
    }

    if (findUser.username === username) {
        if (findUser.password === password) {
            req.session.user = { id: findUser._id };
            res.status(200).json({ msg: "User logged in successfully" });
        } else {
            res.status(400).json({ msg: "Password is incorrect" });
        }
    } else {
        res.status(400).json({ msg: "user is not exist" });
    }
};


// logout

const logout = async (req, res) => {
    req.session.destroy(function (err) { console.log("session destry") })
    res.json({ msg: "user logout successfully" })
}

// register 


const register = async (req, res) => {
    let { username, email, password, otp } = req.body;
    let findUser = await User.findOne({ email });

    // console.log(Date.now(), "_", otpstore[email]["time"]);
    // console.log(Date.now() - otpstore[email]["time"])

    if (otpstore[email]["otp"]!==otp || (Date.now() - otpstore[email]["time"] >= 60000)) {
        return res.json({
            msg: "email varifiction fail"
        })
    }
    delete otpstore[email]
    console.log(otpstore)
    const user = await User.findOne({ username: "username" })

    if (user) {
        res.status(409).json({
            msg: "user already registerd"
        })
    } else {
        await User.create({ username: username, password: password, email: email })
        res.status(201).json({
            msg: "user is registe"
        })
    }

    // if (findUser) {
    //     res.status(409).json({ msg: "user alredy exist" })
    // } else {
    //     let user = await User.create({ username, email, password, email })
    //     res.status(201).json(user)
    // }
};


// otp verifaction

const otpverifyEmail = async (req, res) => {
    const { email } = req.body;
    console.log(email)

    const to = email
    const subject = "otp from mufij"
    const otp = Math.round(Math.random() * 10000 - 1)

    otpstore[email] = {
        otp: otp,
        time: Date.now()
    }
    console.log(otpstore)

    const html = `<p>this is youtr otp it will expire in 2 minit</p> 
    <h1>otp :${otp}</h1>
    <p>thank you and best </p>`

    // await sendotp(to, subject, html)
    res.json
        ({
            msg: `email send ${otp}}`
        })

}

module.exports = { register, login, logout, otpverifyEmail }