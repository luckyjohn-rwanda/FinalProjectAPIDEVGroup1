import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Billers from "../models/user.js";

dotenv.config();

//Add a User - Sign Up
export async function addUser(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            let userObj = {
                email: req.body.email,
                password: hash,
                name: req.body.name,
            }
            let user = await Billers.create(userObj);
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'User created successfully',
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User could not be created at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a user
export async function viewUser(req, res) {
    try {
        let user = await Billers.findAll({ where: { billerid: req.params.id } });
        if (user) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: user
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all Billers
export async function viewAllBillers(req, res) {
    try {
        let allBillers = await Billers.findAll();
        if (allBillers) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: allBillers
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Sign In
export async function signIn(req, res) {
    //Get a user with the email address
    //Ensure that their password is correct
    //Create a JWT for them. (For Authenticating Other API Requests)
    try {
        let user = await Billers.findOne({ where: { email: req.body.email } })
        if (!user) {
            return res.status(401).json({
                status: false,
                message: "Authentication Failed: User with email address not found."
            })
        }
        bcrypt.compare(req.body.password, user.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: failed,
                    message: "Authentication Failed: Incorrect password."
                })
            }

            let authToken = jwt.sign({ email: user.email, billerid: user.billerid },
                process.env.AUTH_KEY, { expiresIn: "1h" });

            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: { name: user.name, email: user.email, billerid: user.billerid },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update user password
export async function updateUserPass(req, res) {
    try {
        bcrypt.hash(req.body.password, 10).then(async (hash) => {
            let userObj = {

                password: hash

            }
            let user = await Billers.update(userObj, { where: { billerid: req.params.id } });
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'User password updated successfully',
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User password could not be updated at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update user record
export async function updateUser(req, res) {
    try {

        let updateduser = await Billers.update(req.body, { where: { billerid: req.params.id } });
        if (updateduser) {
            res.json({
                success: true,
                message: 'user records updated successfully',
                data: updateduser
            })
        } else {
            res.json({
                success: true,
                message: 'No user records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Delete user
export async function deleteUser(req, res) {
    try {

        let userToDelete = await Billers.findAll({ where: { billerid: req.params.id } });
        if (userToDelete) {
            let deleteduser = await Billers.destroy({ where: { billerid: req.params.id } });
            if (deleteduser) {
                res.json({
                    success: true,
                    message: 'User records deleted successfully',

                })
            } else {
                res.json({
                    success: true,
                    message: 'No user records found.',
                })
            }

        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
