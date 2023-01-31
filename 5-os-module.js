 //os module
//for interacting with operating system and server
const os = require('os');

//example; to get info about the user
const user = os.userInfo();
console.log(user)

//this method returns uptime in seconds
//this is without assigning to a method
console.log('The System Uptime is ' +  os.uptime + ' seconds.')
