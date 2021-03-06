const request = require('request');
const yargs = require('yargs');

const argv = yargs.argv;

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20%20philadelphia',
    json: true,
}, (error, response, body)=>{
    console.log('Address: ', body.results[0].formatted_address);
    console.log('Latitude: ', body.results[0].geometry.location.lat);
    console.log('Longitude: ', body.results[0].geometry.location.lng);
})