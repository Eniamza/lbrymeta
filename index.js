const fulldump = require('./src/modules/fulldump');
const readlineSync = require('readline-sync');


let typeOptions = [`Full Dump`,`Link Dump`];
let dumpType = readlineSync.keyInSelect(typeOptions, 'Select Your Choice');
console.log(dumpType);

if(dumpType==0){
    fulldump();
    
}

else if (dumpType==1){

    
}