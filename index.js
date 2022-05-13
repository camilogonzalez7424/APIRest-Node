const express = require('express');

const app = express();
app.use(express.json());

//Registrar

const userServices = require('./services/userServices');
userServices.createServices(app);

const productServices = require('./services/productServices');
productServices.createServices(app);

const orderServices = require('./services/orderServices');
orderServices.createServices(app);

app.listen(8080, ()=>{
    console.log("El servidor esta preparado");
});