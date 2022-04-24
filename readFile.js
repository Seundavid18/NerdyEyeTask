const fs = require('fs')



fs.readFile('./TaskOne/index.txt', 'utf-8', (err, data)=>{
    if (err){
        console.log(err)
    }
    try{
        fs.writeFile('./TaskOne/smart.txt', `${data}`, err=>{
            if (err){
                console.log(err)
            }
            console.log(data)
        })
    } catch(error){
        console.log(error)
    }
}) 
