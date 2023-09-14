const FootballBoot = require('../models/BootModel');


const getAllBoots = async (req,res) => {
    try{
        const boots = await FootballBoot.find();
        res.status(200).json(boots);
    }catch(error){
        console.error(error);
        res.status(500).json({message : "Server error"});
    }
};


module.exports = {getAllBoots};
