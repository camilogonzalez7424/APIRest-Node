const productProvider = require('../providers/productProvider');

const createServices = (app) => {
    
    app.get('/api/products/all', (req, res) => {
        productProvider.getAll(
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

    app.post('/api/products/create', (req, res)=>{
        let product = req.body;
        productProvider.addProducts(product, (result)=>{
            res.send(result);
        });
    });


}


//____________________________________________________________________________________________





module.exports.createServices = createServices;