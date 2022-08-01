const handleLogin = require("./index").handler;
let event = {};

event.body = JSON.stringify({
  username: "fezekileplaatyi@gmail.com",
  password: "Uminathi@2019",
});
let context = {};

handleLogin(event, context, (error, result) => {
  if (!!error) console.error("Error loggin in. Details: ", error);
  else console.debug("Successfuly logged in. Details", result);
});
