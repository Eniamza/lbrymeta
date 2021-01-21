const prompt = require('prompt-sync')();
const axios = require('axios');
const fs = require('fs');


    let metadata;
    let lbryData;
    let meta=[];
    let contentTitle;
    let claimid;
    let i;
    let name;
    let downloadURL;
    let bye ;
    
    module.exports = function(){
    let channelClaim = prompt(`Enter Channel Claimid:`);
    let url = `https://chainquery.lbry.com/api/sql?query=SELECT%20*%20FROM%20claim%20WHERE%20publisher_id%20=%20%27${channelClaim}%27%20AND%20bid_state%20%3C%3E%20%27Spent%27`;
    
    console.log(`Fetching from ${url}`);
    axios.get(url)
    .then (response =>{
        metadata= response.data.data;
         

        if(response.data.success==true) {
    
            console.log(`Link Dump Mode selected`);
            console.log(`API is Working and successfully fetched. Generating Links and with Title!`);
            for(i=0;i<metadata.length;i++){
                contentTitle = metadata[i].title    
                claimid=metadata[i].claim_id;
                name=metadata[i].name;
                downloadURL=`https://lbry.tv/$/download/${name}/${claimid}`;
                meta[i]={id:i+1, title:contentTitle, url:downloadURL};
                
                
             }
            
            meta=JSON.stringify(meta, null, 1);
            fs.writeFileSync('meta.json', meta);
            bye = prompt(`Data is Saved in meta.json .Bela Ciao! [Press Enter to exit]`);
            
        }
        else if (lbryData.success==false){
            
            console.log("Uh oh! API is up but isn't working properly. Try again in a bit");
            bye = prompt(`\nBela Ciao! [Press Enter to exit]`);
        }
        
    
     
    })
    
        .catch(error => {
            console.log(error);
            bye = prompt(`\nBela Ciao! [Press Enter to exit]`);
      });
    } 