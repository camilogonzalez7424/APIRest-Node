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

module.exports.getAll = getAll;
module.exports.addUsers = addUsers;