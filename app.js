/*
App.js - This script creates a static server, hosts files from the "public" directory and
finds and empty port to listen on
Copyright (C) 2021  Immanuel Garcia, Luke Harris, Sydney
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/old-licenses/gpl-2.0.html.
*/

// Imports

/* 
VERSION LOG:

---------------------------------------- NOTE ----------------------------------------------
WHEN RELEASING A VERSION PLEASE ADD VERSION, DESCRIPTION AND CREDITS USING THE FORMAT BELOW

VERSION - DESCRIPTION [ CREDITS ]

ALSO MAKE SURE TO UPDATE THE VERSION VARIABLE!!!

---------------------------------------------------------------------------------------------

1.0.0 - INITIAL RELEASE [ ALEXDEV404 ]
1.25.6 - ADD FEATURES AND BASE [ ALEXDEV404 ]
1.30.6 - NEONITE PATCH [ ALEXDEV404 ]
1.31.6 - DESTROY PARTS OF NEONITE CODE WITH ORIGINAL CODE [ ALEXDEV404 ]
1.31.7 - EDIT ERRORS.JS PATH [ ALEXDEV404 ] 
1.31.8 - REROUTE PATHS TO LIBS IN A MINIFIED WAY [ ALEXDEV404 ] 
1.32.8 - ADDED ALL CORE MODULES [ ALEXDEV404 ] 
1.32.9 - FIXED THEME BUG [ ALEXDEV404 ] 
1.32.10 - ADDED INSTALL SCRIPT [ GRAYBTW ]
1.34.10 - REROUTED PATHS AND FIXED BACKEND [ ZINX ]
1.40.0 - STABLE RELEASE [ ZINX, VINZY, GRAYBTW, ALEXDEV404 ]
1.40.1 - IMPROVED ERROR HANDLING [ ALEXDEV404 ]
1.40.2 - SORTED MODULES AND SPREADED API.JS OUT INTO SEPARATE FILES [ ALEXDEV404 ]
1.40.3 - MADE SERVER "ACTUALLY" PRINT OUT REQUEST METHOD INSTEAD OF PRINTING OUT PRE-TYPED GARBAGE [ ALEXDEV404 ]


*/

const express = require("express"); // Used to activate the NodeJs express application libraries
const getPort = require("get-port"); // Used to listen for an empty random port
const fs = require("fs"); // Used to access the immediate filesystem of an application.
const { v4: uuidv4 } = require("uuid"); // Used to generate a unique random ID
const errors = require("./lib/errors");
const { ApiException } = errors;
const console = require("console"); // Console Library
const { exec } = require("child_process"); // Shell execution library
const app = express(); // Create an express application
const runfiles = "./modules"; // All core libraries and scripts required for Blaze to run
const path = require("path"); // Used for file extension filter

// Definitions

const REQ_LOGGING = true; // Request Logging is set to false by default
const version = "1.40.3";
const cyear = 2021;
const authors = "Immanuel Garcia, Luke Harris, Sydney";
const windowTitle = "Blaze Server";

// Imported and converted from a Python Project

const bcolor = {
  HEADER: "\033[95m",
  OKBLUE: "\033[94m",
  OKCYAN: "\033[96m",
  OKGREEN: "\033[92m",
  WARN: "\033[93m",
  FAIL: "\033[91m",
  END: "\033[0m",
  BOLD: "\033[1m",
  UNDERLINE: "\033[4m",
};

// A sleep function I found somewhere just in case

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// Main application starts here!
console.log("\n");
exec(`title ${windowTitle} version ${version}`); // Sets the window title to Blaze Server

// uuidv4(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

// https://www.w3schools.com/js/js_strict.asp
("use strict"); // Prevents program from using uninitialized and undeclared variables
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("etag", false);

if (REQ_LOGGING) {
  // https://expressjs.com/en/guide/using-middleware.html#middleware.application

  app.use((req, res, next) => {
    // res (response variable) is never used in this scope
    console.log(`${bcolor.OKGREEN}[${req.method}]${bcolor.END}`, req.url); // Logs the response URL to the console
    next();
  });
}
// https://expressjs.com/en/starter/static-files.html

app.use("/", express.static("public")); // Set serverdir to rootdir and create an HTTP server that serves static files

/* app.use((req, res, next) => {
  // req and res are never used in this scope
  next(new ApiException(errors.com.epicgames.common.not_found)); // IDK
});*/

// Returns files with a certain file extension
// https://stackoverflow.com/a/44200655/10976415

let dirPath = path.resolve(runfiles); // path to your directory goes here
let filesList;

fs.readdir(dirPath, function (err, files) {
  if (err) {
    console.log("not found");
  } else {
    filesList = files.filter(function (e) {
      return path.extname(e).toLowerCase() === ".js";
    });
    //  console.log(filesList);
  }
});

init(); // Run init function

async function init() {
  await sleep(500); // Display main title for a bit then go onto the main stuffs

  // https://github.com/sindresorhus/get-port/
  // https://www.npmjs.com/package/get-port

  const port = process.env.app_port || await getPort({ port: [5595, 80, 8080] }); // Dynamically fetches a random getPort
  app.listen(port, () => {
    console.clear();
    exec(`title ${windowTitle} is listening on localhost port ${port}`); // Switch title to Blaze Server is listening on port {port}.

    // Saves Port Number To File
    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp

    start(); // Display Disclaimer and start Blaze

    const filename_log = "port";

    // Creates File if Not Found
    // https://flaviocopes.com/how-to-check-if-file-exists-node/

    fs.access(filename_log, fs.F_OK, (err) => {
      if (err) {
        // console.error(err); // For debugging purposes

        console.log(
          `${bcolor.OKBLUE}[INFO]${bcolor.END}`,
          `File ${filename_log} Not Found! Is this a first-time run?`
        );
        console.log(
          `${bcolor.OKBLUE}[INFO]${bcolor.END}`,
          `File ${filename_log} Creating one...`
        );

        createPortfile();

        return 0;
      } // Deletes File if Found
      fs.unlink(`${filename_log}`, function (err) {
        if (err) throw err;
        console.log(
          `${bcolor.OKBLUE}[INFO]${bcolor.END}`,
          `File ${filename_log} found. Deleting...\n`
        );
      });

      createPortfile();

      function createPortfile() {
        // Recreates File With Correct Port Number

        fs.writeFile(`${filename_log}`, `${port}`, function (err) {
          if (err) throw err;
          console.log(
            `${bcolor.OKBLUE}[INFO]${bcolor.END}`,
            `Saved Port Number to ${filename_log}\n`
          );
        });
      }
    });

    // Check for manager directory

    /* fs.access("./managers", function(error) {
  if (error) {
    console.log("Directory does not exist.")
  } else {
    console.log("Directory exists.")
  }
})*/

    // PATCH 1.30.6! SWITCH TO NEONITE LIB!
    function start() {
      fs.access(runfiles, async function (err) {
        if (err) {
          // Stage 1 Fails

          exec(`title ${windowTitle} has failed to load!`); // Switch title to "Blaze Server has failed to load!".

          console.error(
            `${bcolor.FAIL}Core Directory Does Not Exist. Blaze Cannot Continue to Launch.${bcolor.END}`
          );
          console.log("\n");
          console.log(
            `${bcolor.HEADER}Blaze has ${bcolor.FAIL}FAILED${bcolor.END}${bcolor.HEADER} to launch!${bcolor.END}`
          );
          console.log("\n");
          console.error(`${bcolor.FAIL}THE FULL ERROR IS DISPLAYED BELOW:`);
          console.error(err);
          console.log(`${bcolor.HEADER}To exit, hit any key.${bcolor.END}\n`);
          process.exit();
        } else {
          // Stage 1 Passes
          console.log("\n");
          console.log("Core directory exists. Loading required files...\n");

          for (let range = 0; range < filesList.length; range++) {
            require(`${runfiles}/${filesList[range]}`)(app, port);
            console.log(
              `${bcolor.OKCYAN}[OK] Importing: ${runfiles}/${filesList[range]}${bcolor.END}`
            );
          }
          const theme = require("./ThemePacks/CurrentTheme.js")(app, port); // Load theme
          console.log("\n");

          // Replaced shit code with better code.
          /*  fs.readdirSync(`${__dirname}/managers`).forEach(route => { //for the managers folder
            require(`${__dirname}/managers/${route}`)(app, 5595); //port number = 5595 
          })*/

          // NEONITE STARTS
          
          app.use((req, res, next) => {
            next(new ApiException(errors.com.dynamite.common.not_found));
          })

          app.use((err, req, res) => {
            let error = null;

            if (err instanceof ApiException) {
              error = err;
            } else {
              const trackingId =
                req.headers["x-epic-correlation-id"] || uuidv4();
              error = new ApiException(
                errors.com.dynamite.common.server_error
              ).with(trackingId);
              console.error(trackingId, err);
            }

            error.apply(res);
          });
          
          // Neonite ENDS
          
          await sleep(2000);

          console.clear();
          console.log("\n");
          console.log(`< Theoretical Ascii logo goes here >`);
          console.log("\n");
          console.log(
            `${bcolor.OKGREEN}Blaze version ${version}, Copyright (C) ${cyear} ${authors}\nBlaze comes with ABSOLUTELY NO WARRANTY.\n\nThis is free software, and you are welcome to redistribute it under certain conditions.\nFor more information, please refer to the bundled LICENSE file.${bcolor.END}`
          );
          console.log("\n");
          console.log(
            `${bcolor.HEADER}Blaze has successfully initialized and is listening on port ${port}.${bcolor.END}`
          );
          console.log(
            `${bcolor.HEADER}To exit, hit CTRL + C at any time.${bcolor.END}\n`
          );
        }
      });
    }
    // Run Color Tests
    /*
    
    console.log(`${bcolor.HEADER}HEADER${bcolor.END}`);
    console.log(`${bcolor.OKBLUE}OKBLUE${bcolor.END}`);
    console.log(`${bcolor.OKCYAN}OKCYAN${bcolor.END}`);
    console.log(`${bcolor.OKGREEN}OKGREEN${bcolor.END}`);
    console.log(`${bcolor.WARN}WARN${bcolor.END}`);
    console.log(`${bcolor.FAIL}FAIL${bcolor.END}`);
    console.log(`${bcolor.BOLD}BOLD${bcolor.END}`);
    console.log(`${bcolor.UNDERLINE}UNDERLINE${bcolor.END}`);
    */
  });
}
module.exports = app;
