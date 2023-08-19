import http from 'http';

const student = [
    {"id":1, "name":"priya","RollNo":23},
    {"id":2, "name":"Jyoti","RollNo":22},
    {"id":3, "name":"Sachin","RollNo":20},
    {"id":4, "name":"Sween","RollNo":19},
    {"id":5, "name":"Nikki","RollNo":27},
    {"id":6, "name":"Vikash","RollNo":30},
]


const server = http.createServer((request,response)=>{
if(request.method === 'GET'){
    response.writeHead(200,{'Content-Type' : 'application/json'})
    response.end(JSON.stringify(student))
}

else if(request.method === 'POST'){
   let update = '';
   request.on('data',(data)=>{
    update += data
   })

   request.on('end',()=>{
    
    console.log("hello")
    
    student.push(JSON.parse(update))
    response.writeHead(200,{'Content-Type' : 'application/json'})
    response.end(JSON.stringify(student))
   })

}

else if(request.method === 'DELETE'){
   let url = request.url.split('/')
   student.filter((bache)=>request.url !== url)
response.end(JSON.stringify(student))
   
}


else if(request.method === 'PUT'){
    let puturl = ''
    request.on('data',(data)=>{
      puturl += data; 
    })


request.on('end',() =>{
    const readss = Number(request.url.split('/')[1])
   student[readss] = JSON.parse(puturl)
response.writeHead(200,{'Content-Type' : 'application/json'})
response.end(JSON.stringify(student))

})
}

})


server.listen(8080,()=>{
    console.log("success")
})

// let cars = [
//     {"id": 1, "model": "porsche", "make": 2000},
//     {"id": 2, "model": "lamborghini", "make": 2023},
//     {"id": 3, "model": "mercedes", "make": 2023},
//     {"id": 4, "model": "tesla", "make": 2050},
//     {"id": 5, "model": "aston martin", "make": 2000},
//     {"id":6,"model":"kia","make":2000,"number":[1,2,3,4]}
// ] 

// const server = http.createServer((request, response) => {
//     if(request.method === "GET"){
//         response.writeHead(200, {'Content-Type': 'application/json'});
//         response.end(JSON.stringify(cars));  
//     }
//     else if(request.method === "POST"){
//         let body = ''
//         request.on('data', (data) => {
//             body += data
//         })
//         request.on('end', () => { 
//             response.writeHead(200, {'Content-Type': 'application/json'});
//             cars.push(JSON.parse(body))
//             response.end(JSON.stringify(cars));
//         })
//     }
//     else if(request.method === "DELETE" && request.url.match(/\/\d+/)){
//         // /5
//         // ['', '5']
//         let idFromURL = Number(request.url.split("/")[1])      //5
        
//         cars = cars.filter((car) => {return car.id !== idFromURL})
//         response.end(JSON.stringify(cars));
//     }
//     else if(request.method === "PUT" && request.url.match(/\/\d+/)){
//         let body = ''
//         request.on("data", (data) => {
//             body += data
//         })
//         request.on("end", () => {
//             let idFromURL = Number(request.url.split("/")[1])
//             cars[idFromURL] = JSON.parse(body)
//             response.writeHead(200, {'Content-Type': 'application/json'});
//             response.end(JSON.stringify(cars));
//         })  
//     }
// })

// server.listen(8080, () => {
//     console.log("Server has started on 8080")
// })


// import EventEmitter from "events";
// class EmitterFunc extends EventEmitter{}
// const emitterFunction = new EmitterFunc();
// let age = 26;

// emitterFunction.on("age", () => {
//     console.log(++age)
//     console.log(age++)
// })
// emitterFunction.emit("age")
// emitterFunction.emit("age")