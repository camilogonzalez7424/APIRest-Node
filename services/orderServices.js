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


    app.post('/api/ordersProducts/create', (req, res)=>{
        let orderP = req.body;
        orderProvider.addProductsToOrder(orderP, (result)=>{
            res.send(result);
        });
    });

    app.put('/api/ordersProducts/update/:id', (req, res)=>{
        let order = req.params.id;
        orderProvider.updateOrder(order, (result)=>{
            res.send(result);
        })
    });

    app.get('/api/ordersInformation/get/:id',(req,res)=>{
        let id = req.params.id;
        orderProvider.orderInformation(id,(result)=>{
            res.send(result);
        });
    });

    app.put('/api/deleteProduct/delete',(req, res)=>{ //Tendira que ser DELETE pero dado que elimina un valor especifico lo hice put
        let x = req.body;
        orderProvider.deleteProduct(x, (result)=>{
            res.send(result);
        });
    });

}

module.exports.createServices = createServices;