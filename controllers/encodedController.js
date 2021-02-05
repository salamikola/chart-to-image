const encodeImport = require("../services/encodeChart");

// encode the request to encoded image
exports.encode_chart = function(req, res) {
    encodeImport.encode(req.body.configuration).then((data)=>{
        res.json({data:data,success:true});
    }).catch((e)=>{
        res.status(400).json({error:'an error occurred',success:false});
    })
};