<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Dumper_logo.svg/1200px-Dumper_logo.svg.png" width="500" height="300">

-------------------

LBRYMeta Dumper is a tool that uses LBRY's Chainquery API to fetch a channel meta in JSON format
Bineries are available at [Releases](https://github.com/Eniamza/lbrymeta/releases)

### How does this works?

-------------------

It uses LBRY's Chainquery API. You can find detailed explaination [HERE](https://lbry.com/news/what-is-chainquery). 
What this application does is it makes a GET request to the API and indents it properly then saves them to a JSON file for further usage.

### In Granny Terms :

-------------------
Suppose Meta Information such as Name, description, claimid is Cake :yum: . Which is stored on a shelf. Now you want to take all the cake home and eat it later. Picking up one by one would be time consuming. So you [The app] picks up the whole cakeshelf [The Meta table] and store it in a truck [The JSON file].

-------------------

### Scenario

------------------
Lets say , you want to get all the download links of [Gutenberg Channel](https://lbry.tv/@Gutenberg:a) . But as their are 52400 books listed. Your eyes will pop out if you start copy pasting links from share button.

Instead of that start this and app choose option 2. Enter channel claimid . Voila! All download links will be generated along with title and stored in meta.json file.

Now you may even covert it to CSV or Excel file to mass import on Marketplaces. Or your Content listing site. For example [Enypt Library](https://enypt.cc)

### Running in node environment locally 

-------------------

1. Install [NodeJS](https://nodejs.org/en/download/) [Add to path if needed]
2. Clone tha repo `git clone https://github.com/Eniamza/lbrymeta.git`
3. Install dependencies `npm install`
4. Run the app `node index.js`
5. Enjoy :wink:

### Modules

--------------------

- FullDump : Dumps every information available for a channel on blockchain 
- LinkDump : Dumps Title and Generates download links for every content in a channel 

### Donate

--------------------

- 📗 LBC : bSnBdsuSMvzozjfiFDVfPoV4kbtN2YNRWM
- 🌲 Cointree: https://cointr.ee/eni
