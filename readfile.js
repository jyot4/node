import fs from 'fs'

fs.writeFile("read.txt","hello this is priya vyas", (err)=>{
    if(err){
        console.log("this code have err")
    }
})


fs.readFile("read.txt",(err,data)=>{
    if(err){
        console.log("this code have error")
    }
    else{
       console.log(data.toString()) 
    }
})

fs.appendFile("read.txt","heey priyaa",(err)=>{
    if(err){
        console.log("this code have error")
    }

    
})