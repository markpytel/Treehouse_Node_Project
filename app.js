var profile = require("./profile");

var users = process.argv.slice(2);

// var users = ["chalkers", "joykesten2", "davemcfarland"];

users.forEach(profile.get);
