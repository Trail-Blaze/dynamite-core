/*
rpc.js - adds a discord rpc to blaze
Copyright (C) 2021  Luke Harris
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
  
const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

module.exports = (app) => {
    rpc.on("ready", async() => {
        rpc.setActivity({
            details: "first and last to do it",
            largeImageKey: "large",
            largeImageText: "Join Blaze Now!",
            startTimestamp: new Date(),
            buttons: [{
                label: "Join Our Discord!",
                url: "https://discord.gg/zgUFzTFf2Y"
            }]
        })
        console.log("[RPC] Discord RPC is Active");
    })
    
    rpc.login({
        clientId: "931295072341884929"
    })
  };


