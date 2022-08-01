var AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.AWS_REGION,
});
const docClient = new AWS.DynamoDB.DocumentClient();

function saveTransportRouteRate(eventBody) {
  const { email, origin, destination, transportRate } = eventBody;

  var params = {
    TableName: process.env.TRANSPORTER_RATES_TABLE,
    Item: {
      EmailForTransportDriver: email,
      RouteHash: origin.toLowerCase() + "#" + destination.toLowerCase(),
      Origin: origin,
      Destination: destination,
      TransportRate: transportRate,
      DateCreated: new Date().toISOString(),
    },
  };

  return new Promise((resolve, reject) => {
    docClient.put(params, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  saveTransportRouteRate,
};
