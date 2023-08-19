// import readline from 'readline';

//  let read = readline.createInterface(process.stdin, process.stdout)

//  read.setPrompt(`hello this is priya vyas`)
//  read.prompt()


import readline from 'readline'
const read = readline.createInterface(process.stdin ,process.stdout);



// question method 
// read.question('what is your age' ,   (age)=>{
//    console.log('your age is ' , + age)
// })



// read.question('what you want to square ' ,(numbers)=>{
// const splitNo = numbers.split(",")

// const map = splitNo.map((number)=> number*number)

// read.write('your square will be '  + map.join(" "))
// read.close()

// })

 // setPromot()

read.setPrompt(`hey Is sachin is mad?`)
read.prompt()

read.on('line',(answer)=>{
    console.log( `${answer} he is mad`)
        read.close()
})


// read.on('SIGINT',()=>{
//     read.question('do u want exit or not ' ,(input)=>{
//         if(input.match(/^y(es)?&/i)){
//             // read.pause();
//             read.close()
//         }
//     })
// })