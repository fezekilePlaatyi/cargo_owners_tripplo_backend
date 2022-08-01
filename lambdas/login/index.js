const Login = require("./Login");

exports.handler = async (event, context, callback) => {
  try {
    const { username, password } = JSON.parse(event.body);

    const loginResult = await Login.signIn(username, password);

    callback(null, {
      statusCode: loginResult.statusCode,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify(loginResult),
    });
  } catch (handlerError) {
    console.log(handlerError);
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify(handlerError),
    });
  }
};
