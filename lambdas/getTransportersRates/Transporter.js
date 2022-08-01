var AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.AWS_REGION,
});
var ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
});

function getAllTransportRouteRates(allItems = [], lastKey = undefined) {
  var params = {
    TableName: process.env.TRANSPORTER_RATES_TABLE,
  };

  if (!!lastKey) {
    params.ExclusiveStartKey = lastKey;
  }

  return ddb
    .scan(params)
    .promise()
    .then((data) => {
      let all = allItems.concat(data.Items);

      if (!!data.LastEvaluatedKey) {
        return getAllTransportRouteRates(all, data.LastEvaluatedKey);
      } else {
        return Promise.resolve(all);
      }
    })
    .catch((err) => {
      console.debug("Error occured while reading", err);
      return Promise.reject(err);
    });
}

module.exports = {
  getAllTransportRouteRates,
};
