import Payments from "../models/payment.js";


//Add a payment
export async function capturePayment(req, res) {
    try {
        let paymentObj = {
                billid: req.body.billid,
                paid: req.body.paid,
            }

        let payment = await Payments.create(paymentObj);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Payment created successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Payment could not be created at this time'
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

//View a payment
export async function viewPayment(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {payid: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
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

//View all Payments
export async function viewAllPayments(req, res) {
    try {
        let allPayments = await Payments.findAll();
        if (allPayments) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: allPayments
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
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

// View Premise Payments
export async function viewPaymentsByPremise(req, res) {
    try {
        let onepayment = await Payments.findAll({where: {premiseid: req.params.id}});
        if (onepayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: onepayment
            })
        } else {
            res.json({
                success: true,
                message: 'No payment records found.',
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