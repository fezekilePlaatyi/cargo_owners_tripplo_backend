const Transporter = require("./Transporter");

exports.handler = async (event, context, callback) => {
  try {
    const eventBody = JSON.parse(event.body);
    const saveTransporterRateResults = await Transporter.saveTransportRouteRate(
      eventBody
    );

    callback(null, {
      statusCode: saveTransporterRateResults.statusCode,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify(saveTransporterRateResults),
    });
  } catch (handlerError) {
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
