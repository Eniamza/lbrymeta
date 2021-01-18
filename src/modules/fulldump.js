const fs = require('fs');
const axios = require('axios');
const readlineSync = require('readline-sync');



module.exports = function () {
let metadata;
let lbryData;
let channelClaim = readlineSync.question(`Enter Channel Claimid:`);
let bye ;
let url = `https://chainquery.lbry.com/api/sql?query=SELECT%20*%20FROM%20claim%20WHERE%20publisher_id%20=%20%27${channelClaim}%27%20AND%20bid_state%20%3C%3E%20%27Spent%27`;

console.log(`Fetching from ${url}`);
axios.get(url)
.then (response =>{
    metadata= response.data;
    metadata=JSON.stringify(metadata, null, 1);
    lbryData= JSON.parse(metadata); 
s
    if(lbryData.success==true) {

        console.log(`Full Dump Mode selected`);
        console.log(`API is Working and successfully fetched. Writing Data to File!`);
        fs.writeFileSync('meta.json', metadata);
        bye = readlineSync.question(`Data is Saved in meta.json .Bela Ciao! [Press Enter to exit]`);
        console.log(lbryData.data)
    }
    else if (lbryData.success==false){
        
        console.log("Uh oh! API is up but isn't working properly. Try again in a bit");
        bye = readlineSync.readlineSync(`\nBela Ciao! [Press Enter to exit]`);
    }

 
})
    .catch(error => {
        console.log('API seems to be down. Booo! Try again in a bit or contact in LBRY in Discord\nhttps://chat.lbry.com');
        bye = readlineSync.question(`\nBela Ciao! [Press Enter to exit]`);
  });
}