const db = require('../db/DBConnection');

const getAll = (onresult)=>{
    db.con.query("SELECT * FROM usersA00370263", (err,result)=>{
        if(!err){
            onresult(result);
        }
    });
}

const addUsers = (user, onresult)=>{
    db.con.query("INSERT INTO usersA00370263(name, natId) VALUES ('"+user.name+"','"+user.natId+"')", (err)=>{
        if(!err){
            onresult({result:"OK"});
        }else{
            onresult({result:"ERROR"});
        }
    });
}



const getNatId = (natId,onresult)=>{
    db.con.query("SELECT id FROM usersA00370263 WHERE natId = ('"+natId+"')", function(err,resul){
      
        if(!err){
            console.log(resul[0].id);
        //  const myJSON = JSON.stringify(resul);
            var myJSON = resul[0].id;


        db.con.query("SELECT * FROM ordersA00370263 WHERE userId=('"+myJSON+"')" , (err,result)=>{
            if(!err){
                onresult(result);
            }
        });
    }

    });

    
}




module.exports.getAll = getAll;
module.exports.addUsers = addUsers;
module.exports.getNatId = getNatId;