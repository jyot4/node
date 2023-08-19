import express from 'express'

const server = express()

server.get('/',(req,res)=>{
    res.send('heyy!')
})

server.listen(8000,()=>{
    console.log('yess i am listening your request ')
})