// const { bcolor, baseDir, useSecureHTTPS, app } = require("../app");
const { useSecureHTTPS, bcolor } = require("../app");


/*
if(baseMethods.useSecureHTTPS){
    console.log("Handler loaded successfully!")
}
*/
module.exports = () => {
  // console.log(`BASEDIR: ${baseDir}; USEHTTPS: ${useSecureHTTPS}; APP: ${app}`);

  // TODO: NODEJS HTTPS CERTIFICATE LOADING
  // IMPLEMENTATION: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
  if(useSecureHTTPS){
      console.log(`${bcolor.OKBLUE}[INFO]${bcolor.END}${bcolor.OKGREEN} Loading HTTPS Certificates...${bcolor.END}`);
  }
  if(!useSecureHTTPS){
      return;
  }
};
