let cloudinary = require('cloudinary').v2;

exports.product = (req, res, next) => {
    let parsedvalue
    cloudinary.api.resources_by_tag("product", {max_results: 500, tags: true, context: true, resource_type: 'image'}, (error, result) => {
        if(result){
            parsedvalue = result.resources;
            let pLength = parsedvalue.length;
            let newObj = parsedvalue.map((e,i,a) => (
                {id: e.asset_id, url: e.url, content:{pdesc:e.context}}
            ));
            res.status(200).json({
                message: "Product Received",
                product: newObj
            });
        }else{
            console.log(error)
            res.status(400).json({
                message: "Could not get items"
            })
        }
    })
}