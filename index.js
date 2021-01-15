const fs = require('fs');
const axios = require('axios');
const prompt = require('prompt-sync')();

let metadata;
let lbryData;
let channelClaim = prompt(`Enter Channel Claimid:`);
let bye ;
let url = `https://chainquery.lbry.com/api/sql?query=SELECT%20*%20FROM%20claim%20WHERE%20publisher_id%20=%20%27${channelClaim}%27%20AND%20bid_state%20%3C%3E%20%27Spent%27`;

console.log(url);
axios.get(url)
.then (response =>{
    metadata= response.data;
    metadata=JSON.stringify(metadata, null, 1);
    lbryData= JSON.parse(metadata); 

        console.log(`Full Dump Mode selected`);
        console.log(`API is Working and successfully fetched. Writing Data to File!`);
        fs.writeFileSync('meta.json', metadata);
        bye = prompt(`Data is Saved in meta.json .Bela Ciao! [Press Enter to exit]`);
        
        console.log("Uh oh! API is up but isn't working properly. Try again in a bit");
        bye = prompt(`\nBela Ciao! [Press Enter to exit]`);
    }

 
})
    .catch(error => {
    console.log(error);
  });


