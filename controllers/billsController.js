import Bills from "../models/billing.js";

//Add a Bill
export async function captureBill(req, res) {
    try {
        let billObj = {
                premiseid: req.body.premiseid,
                billerid: req.body.billerid,
                reading: req.body.reading,
                amount: req.body.reading * 25
            }
        let bill = await Bills.create(billObj);
        if (bill) {
            res.json({
                success: true,
                message: 'Bill created successfully',
                data: bill
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be created at this time'
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

//View a bill
export async function viewBill(req, res) {
    try {
        let onebill = await Bills.findAll({where: {billid: req.params.id}});
        if (onebill) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: onebill
            })
        } else {
            res.json({
                success: true,
                message: 'No bill records found.',
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

//View all bills
export async function viewAllBills(req, res) {
    try {
        let allBills = await Bills.findAll();
        if (allBills) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: allBills
            })
        } else {
            res.json({
                success: true,
                message: 'No bill records found.',
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

