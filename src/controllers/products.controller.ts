import { Request, Response } from "express";
import { Product } from "./../models/products.models"

class Products {

    constructor() {

    }

    async products(req: Request, res: Response) {

        try {
            let bd = await Product.findAll();
            console.log(bd);
            res.send(bd);

        } catch (error) {
            console.log(error);
        }
    }

    async product3(req: Request, res: Response) {

        try {
            let bd = await Product.findAll();

            console.log(bd);
            res.send(bd);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }



}


export const products = new Products();