// const express = require('express')
import express, {Request, Response} from "express";
import { connectDB } from "./config/db";
import departmentroutes from './routes/department_route'
import employeeroutes from './routes/employee_route'

const app = express()

app.use(express.json())

app.use("/api", departmentroutes);
app.use("/api", employeeroutes);


const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

connectDB().then(() => {
    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})
