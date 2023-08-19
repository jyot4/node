// import  express from 'express'
// import cors from 'cors'


// const app = express()

// app.use(cors({
//     origin: "http://localhost:3000"
// }))

// app.use(express.urlencoded({extended: true}))

// app.post('/',(req,res)=>{
//    console.log(req.body)
//    res.status(200).send("hogya bhai")

// })

// app.listen(8000,()=>{
//     console.log('Sunn rhaa h ')
// })




import express from 'express'
import cors from 'cors';
import connection from './db/Connection.js';

const app = express()

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send("hogyaa ree")
})

connection.then(() => {
  app.listen(8000, () => {
    console.log("sachin acha ladka h ")
  })
}).catch((error)=>{
  console.log(error)
})



