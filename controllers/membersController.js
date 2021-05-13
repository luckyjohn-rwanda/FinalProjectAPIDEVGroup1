import Members from "../models/member.js";

//Add a Member
export async function addMember(req, res) {
    try {
            let member = await Members.create(req.body);
            if (member) {
                res.status(200).json({
                    success: true,
                    message: 'Member created successfully',
                    data: member
                })
        } else {
            res.status(200).json({
                success: true,
                message: 'Member could not be created at this time'
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

//View a member
export async function viewMember(req, res) {
    try {
        let onemember = await Members.findAll({where: {memberid: req.params.id}});
        if (onemember) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: onemember
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//View all members
export async function viewAllMembers(req, res) {
    try {
        let allmembers = await Members.findAll();
        if (allmembers) {
            res.json({
                success: true,
                message: 'Member records retrieved successfully',
                data: allmembers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//Update member record
export async function updateMember(req, res) {
    try {
        
        let updatedmember = await Members.update(req.body,{where:{memberid: req.params.id}});
        if (updatedmember) {
            res.json({
                success: true,
                message: 'Member records updated successfully',
                data: updatedmember
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//Delete a member
export async function deleteMember(req, res) {
    try {
        
        let memberToDelete = await Members.findAll({where:{memberid:req.params.id}});
        if (memberToDelete) {
            let deletedMember = await Members.destroy({where:{memberid:req.params.id}});
            if (deletedMember){
                res.json({
                    success: true,
                    message: 'Member records deleted successfully',
                    
                })
            } else {
                res.json({
                    success: true,
                    message: 'No Member records found.',
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
