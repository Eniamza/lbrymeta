const fulldump = require('./src/modules/fulldump');
const linkdump = require('./src/modules/linkdump');
const readlineSync = require('readline-sync');


let typeOptions = [`Full Dump`,`Link Dump`];
let dumpType = readlineSync.keyInSelect(typeOptions, 'Select Your Choice');
console.log(`Selected option `+typeOptions[dumpType]);

if(dumpType==0){
    fulldump();
    
}

else if (dumpType==1){

    linkdump();
}
