const handleWriteTransportRouteRate = require("./index").handler;
let event = {};

event.body = JSON.stringify({
  email: "someemail@example.com",
  origin: "jhb",
  destination: "ctn",
  transportRate: "3232.232",
});

event.headers = {
  Authorization:
    "eyJraWQiOiJGbFNRMUlubHZlQkFQU0t5K29pbFRyNGtXQTJ1cjBRVmdXb1pvSTVPQlkwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2NWZlMjBkZS04MzdlLTQzMjAtYjAyYi0xYTZkNDJmOTQ2N2QiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfWGpldVV5ZG9yIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiNjVmZTIwZGUtODM3ZS00MzIwLWIwMmItMWE2ZDQyZjk0NjdkIiwib3JpZ2luX2p0aSI6ImM4ZTFjYmUyLWUwM2ItNDk5Yy1iM2Q1LTEwYWVkOWUzNWE3NSIsImF1ZCI6IjJ0NDBiMDJiZ2JhMm9wdXRiNTdqM203YmkiLCJldmVudF9pZCI6Ijc4Y2I5MWM5LWQxOTEtNDM0YS1iYzZkLTBlNjM4OTcwYTAxYSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU5MDY3ODY0LCJwaG9uZV9udW1iZXIiOiIrMjc3ODA2ODc0NDUiLCJleHAiOjE2NTkwNzE0NjQsImlhdCI6MTY1OTA2Nzg2NCwianRpIjoiNGExNWZmYTgtYmIwNy00ZDQ1LWI3NzktNTc4ZTUxOGQ0ODMwIiwiZW1haWwiOiJmZXpla2lsZXBsYWF0eWlAZ21haWwuY29tIn0.fb9oEF72y42OqSXuz-Be49kT5QD21Tp4cHrVpJSIVzwEsvfY8EpYuZjduSUgLApS1UjL1T1oNw9SOTMpghBTw84O29PZLNNNwy4CDdsjzkIwUG0n7NScF4Jt3DQJsfCM16hFWH0JtCa8p98BV2MVHQIm11XXic8aNDE9csboSigrwdYqgg4JIQgr9oUg42ZidLkyJeF5YAqCQUE6-fduL7Nr-Dnc_kpGaK5klFyZH23J6RbQARhuEV8Yf4V_OJ92PaWLnK2eqtDSVo3Ph_r1qZLofW_TqpWsf1GqqB57YXssy_rXZK_JLKmkUb0l3mA_a75jBAdkz2YloisKqOMFcw",
};
let context = {};

handleWriteTransportRouteRate(event, context, (error, result) => {
  if (!!error) console.error("Error. Details: ", error);
  else console.debug("Success. Details", result);
});
