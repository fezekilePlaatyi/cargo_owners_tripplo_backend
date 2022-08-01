const Transporter = require("./Transporter");

exports.handler = async (event, context, callback) => {
  try {
    const getTransportersRouteRatesResults =
      await Transporter.getAllTransportRouteRates();

    callback(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
      },
      isBase64Encoded: false,
      body: JSON.stringify(getTransportersRouteRatesResults),
    });
  } catch (handlerError) {
    callback(null, {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify(handlerError),
    });
  }
};
