const userProvider = require('../providers/userProvider');

const createServices = (app) => {
    
    app.get('/api/users/all', (req, res) => {
        userProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    /*
    app.get('/api/users/:id', (req, res) => {
        userProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });*/

    app.post('/api/users/create', (req, res)=>{
        let user = req.body;
        userProvider.addUsers(user, (result)=>{
            res.send(result);
        });
    });



}

module.exports.createServices = createServices;