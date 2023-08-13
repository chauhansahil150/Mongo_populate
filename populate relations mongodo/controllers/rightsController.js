const Rights = require('../models/rightsModel');
module.exports = {
    createRight: async (req, res) => { 
        const rights = await Rights.create({
            staff_id: req.body.staff_id,
            rights: req.body.rights,
        });
        const rightData = await rights.save()
        
        return res.status(200).json({
            message: "Rights added successfully",
            data: rightData
        })
    },
    
    createStaffByRight: async (req, res) => { 
        // inside try catch
        try {
            
            const rightData = await Rights.find({ _id: req.body.rights_id })
                .populate({
                    path: 'staff_id',
                    match: { name: req.body.name },
                    // match: { name: { $regex: `.*${req.body.name}.*`, } }// match a char anywhere in name case sensitive
                    // match: { name: { $regex: `.*${req.body.name}.*`, Options: 'i' } } // now case insensitive
                    // match: { name: { $eq: req.body.name } },
                    // match: { name: { $ne: req.body.name } },
                    // match: { name: { $in: [req.body.name] } },
                });
            return res.status(200).json({
                message: "Rights finded successfully",
                data: rightData,
            
            })
        } catch (err) {
            return res.status(400).json({
                message: "Error",
                error: err
            })

        } 
    }
}