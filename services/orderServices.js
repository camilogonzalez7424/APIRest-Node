const orderProvider = require('../providers/orderProvider');

const createServices = (app) => {
    
    app.get('/api/orders/all', (req, res) => {
        orderProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    /*
    app.get('/api/users/{id}', (req, res) => {
        userProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });*/

    app.post('/api/orders/create', (req, res)=>{
        let order = req.body;
       // console.log(order);
        orderProvider.addOrders(order, (result)=>{
            res.send(result);
        });
    });



}

module.exports.createServices = createServices;