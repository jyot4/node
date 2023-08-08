// import fs from 'fs'
// import arr from 'arr.txt'


// for(let i = 0 ; i>arr.length; i++   ){
//     fs.writeFile('arr' +i[0] + i[1]+ i[2]+  ".txt", (err,data)=>{
//         if(err){
//             console.log("errr hai bhai")
//         }
//         else{
//             console.log(data)
//         }
//     })
// }

import fs from 'fs'

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.trim().split('\n');
  
  const names = lines[0].split(': ')[1].split(', ');
  const phones = lines[1].split(': ')[1].split(', ');
  const emails = lines[2].split(': ')[1].split(', ');

  // Using a for loop to access the data
  for (let i = 0; i < names.length; i++) {
    console.log('Person', i + 1);
    console.log('Name:', names[i]);
    console.log('Phone:', phones[i]);
    console.log('Email:', emails[i]);
    console.log('---------------------');
  }
});
