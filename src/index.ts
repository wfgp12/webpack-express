import * as express from "express";
import {Request, Response} from 'express'

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send('Hello World whit Typescript');
})

app.listen(port, () => {
    console.log(`App listening on port : ${port} `)
})