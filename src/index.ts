import { nodeModuleNameResolver } from "typescript"

import express from "express"
import { indexRoutes } from "./routes/index.routes";

const app = express();



app.set('port', 4200);

app.listen(app.get('port'),()=>{

console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});


app.use(express.json());
app.use('/', indexRoutes.router);

