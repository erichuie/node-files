const fsP = require('fs/promises');

/**
 * Accepts file path as input and console logs the contents of file
 */
async function cat(path){
  try{
    let contents = await fsP.readFile(path, "utf-8");
    console.log("contents", contents);
  } catch(err){
    console.log(err);
    process.exit(1);
  }

}

/**
 * Accepts URL as input and console logs the contents of that URL as text
 */
async function webCat(url){
  try{
    let urlResponse = await fetch(url);
    console.log("contents of url is",await urlResponse.text());
  } catch(err){
    console.log(err);
    process.exit(1);
  }
}

//checks if the command argument is a valid URL and calls webCat if so
//if it is not a valid URL then calls cat
let url;
try{
  url = new URL(process.argv[2]);
} catch(err){
  console.log(err);
}

if(url){
  webCat(url);
}
else{
  cat(process.argv[2]);
}
