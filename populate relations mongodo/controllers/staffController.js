const Staff=require('../models/staffModel');
module.exports = {
    createStaff: async (req, res) => { 
        try {
            const {name, email}= req.body;
            const staff = await Staff.create({
                name,
                email,
            });
            res.status(201).json({
                status: 'success',
                data: staff
            });
        } catch (err) {
            res.status(400).json({
                status: 'fail why',
                message: err
            });
        }
    
    }
}