const db = require('../db/DBConnection');

const getAll = (onresult)=>{
    db.con.query("SELECT * FROM productsA00370263", (err,result)=>{
        if(!err){
            onresult(result);
        }
    });
}

const addProducts = (product, onresult)=>{
    db.con.query("INSERT INTO productsA00370263(name,price) VALUES ('"+product.name+"','"+product.price+"')", (err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        }
    });

    
}



//__________________________________________________________________________________________________________

const addProductsToOrder = (orderP, onresult)=>{
    db.con.query("INSERT INTO ordersProductsA00370263(orderId,productId,amount) VALUES ('"+orderP.orderId+"','"+orderP.productId+"','"+orderP.amount+"')", (err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        }
    });
}



module.exports.getAll = getAll;
module.exports.addProducts = addProducts;
module.exports.addProductsToOrder = addProductsToOrder; 