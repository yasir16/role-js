
const fs = require('fs')

exports.newValue = (data, device_type)=>{
// newValue = (data, device_type)=>{
    //HARUS BUAT FILE JSON DULU
    // var json= {};
    // fs.writeFile('allFact.json', json, err=>{
    //     if(err){
    //         console.log('Error : ', err)
    //     } else {
    //         console.log('Succesfully wrote file')
    //     }
    // })
    // var yeah = data;

    var raw2 = fs.readFileSync('allFact.json');
    rew1 = JSON.parse(raw2)

    // const raw = fs.readFileSync('newValue.json'); //json diganti data
    var yeah=data;

    
    for ( i = 0; i< yeah.length; i++){
        nama = yeah[i].var_name+"_"+yeah[i].id_profile+"_"+device_type;
        value = yeah[i].value
        // console.log(nama+"="+value)
        rew1[nama]=value;
        allFact = JSON.stringify(rew1);
    }

    

    fs.writeFile('allFact.json', allFact, err=>{
        if(err){
            console.log('Error : ', err)
        } else {
            console.log('Succesfully wrote file')
        }
    })
}

// newValue()

