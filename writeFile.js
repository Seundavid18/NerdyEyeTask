const fs = require('fs')

let text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
Temporibus omnis ipsum consectetur! Voluptatibus laborum vero ipsa similique 
hic inventore eius deleniti corporis ut officia consectetur, nesciunt minima 
labore rem odio.`

try{
    fs.writeFile('./TaskOne/index.txt', text, err =>{
        if (err){
            console.log(err)
        }
        console.log(`successful`)
    })
} catch(error){
    console.log(error)
}