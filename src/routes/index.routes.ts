
import { Router, Request, Response } from "express";
import { users } from "./../controllers/users.contrller";
import {  products } from "./../controllers/products.controller";

class IndexRoutes {

    router: Router = Router();
    constructor() {

        this.router.get('/', users.index);
        this.router.get('/products', products.products);
        this.router.get('/users', users.users);



        this.router.post('/users', users.create);


    }

}

export  const  indexRoutes = new IndexRoutes();