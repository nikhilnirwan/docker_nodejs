const Right = require('../models/rightModel');

module.exports = {

    create: async(req,res) =>{

        const right = await Right.create({
            staff_id:req.body.staff_id,
            right:req.body.right
        })

        const rightData = await right.save();

        return res.send(rightData);

    },
    getData: async(req,res) =>{
        const right = await Right.find({});
        return res.send(right);
    
    }
}