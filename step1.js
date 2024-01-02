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

cat(process.argv[2]);