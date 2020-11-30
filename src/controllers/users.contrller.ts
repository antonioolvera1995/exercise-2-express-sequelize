import { Request, Response } from "express";
import { Op } from "sequelize";
import { User } from "./../models/users.models"

class Users {

    constructor() {

    }


    public index(req: Request, res: Response) {

        res.send('Index')
    }

    async users(req: Request, res: Response) {

        try {
            let all = await User.findAll({ raw: true });
            let us3 = await User.findByPk(3, { raw: true });
            let whenA = await User.findAll(
                {
                    where: {
                        name: {
                            [Op.like]: 'A%'
                        }

                    }
                }
            );

            res.send(all);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }


    async create(req: Request, res: Response) {

        try {

            const param = await req.body;
            // const newUser = await User.create(param);
            
            res.send(param);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }


}


export const users = new Users();