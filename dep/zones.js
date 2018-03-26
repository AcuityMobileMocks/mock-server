/**
 * Created by AXH12 on 11/15/2016.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

var GetZonesBySite = {
    name: 'GetZonesBySite',
    mockRoute: '\/api\/zone\/siteID\/\\d+$', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'multipleResults',  //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [
        {
            //you can use regular javascript to create objects to be served
            multipleResults: function () {
                var result = [];
                var count = 30;
                for (var i = 0; i < count; i++) {
                    result.push(schemas.zone);
                }
                return JSON.stringify({
                    result: result,
                    count: count
                });
            }
        }
    ]
};
mocks.push(GetZonesBySite);

exports.mocks = mocks;
