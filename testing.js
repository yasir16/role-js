const fs = require('fs')


var raw = fs.readFileSync('allFact.json');
rew1 = JSON.parse(raw)
rew1["apas"]=23;

baru =  JSON.stringify(rew1)

fs.writeFile('allFact.json',baru, err=>{
    if(err){
        console.log('Error : ', err)
    } else {
        console.log('Succesfully add file')
    }
});

