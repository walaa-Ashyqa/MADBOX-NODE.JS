const country = process.argv[2];

const mapbox = require("./mapbox");

const wetherdata = require("./WetherData");

mapbox(country, (error, data) => {
  if (error) console.log("the error is : " + error);
  if (data) {
    wetherdata( data.Latitude, data.Longitude,(error, data) => {
      if (error) console.log("the error is : " + error);
      if (data) console.log(data);
    });
  }
});
