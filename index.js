import fs from 'fs'
// import cc from 'cc.txt'
// import cc1 from 'cc1.txt'
// import cc2 from 'cc2.txt'

// const file = fs.readFileSync('cc',)

for (let i = 0; i < 5; i++) {
    fs.readFile('cc' + i + '.txt' ,(err, data) => {
        if (err) {
            console.log("this code have error")
        }
        else {
            console.log(data.toString())
        }
    })
}

// fs.readFile("cc.txt",(err, data)=>{
//     if( err){
//         console.log(err)
//     }else{
//         console.log(data.toString())

//     }


// })

fs.appendFile("cc.txt", "heeell", (err) => {
    if (err) {
        console.log("this code have error")
    }
})





// 

