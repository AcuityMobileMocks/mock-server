/**
 * Created by sxd15 on 3/21/2017.
 */
var mocks = [];
var schemas = require('../schemas/schemas');

// api/siteAssignment/userID/{userID}
var application = {
    name: 'application',
    mockRoute: '\/api\/v1\/applications', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'singleResult', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        singleResult: function() {
            return JSON.stringify({
                "result": [
                    {
                        "applicationID": 1,
                        "applicationName": "Gordon---3-DEV",
                        "description": "IPS commissioning and maintenance iOS app"
                    },
                    {
                        "applicationID": 47,
                        "applicationName": "IPS_AdminTool",
                        "description": "Admin and API application for IPS"
                    },
                    {
                        "applicationID": 48,
                        "applicationName": "IPSEngineering-DEV",
                        "description": "IPS Engineering iOS app"
                    },
                    {
                        "applicationID": 49,
                        "applicationName": "Acuity Brands Commissioner-DEV",
                        "description": "Acuity Brands Commissioning iOS app"
                    },
                    {
                        "applicationID": 50,
                        "applicationName": "IPSAnalytics",
                        "description": "IPS Analytics"
                    },
                    {
                        "applicationID": 74,
                        "applicationName": "IPS_AdminTool_FLR01",
                        "description": "Test version of IPS_AdminTool"
                    },
                    {
                        "applicationID": 77,
                        "applicationName": "TestApp1",
                        "description": "Testing app creation 1"
                    },
                    {
                        "applicationID": 79,
                        "applicationName": "PUTTest2",
                        "description": "Troubleshooting Target 2.0 issue"
                    },
                    {
                        "applicationID": 80,
                        "applicationName": "PUTTest3",
                        "description": "Troubleshooting Target issue still."
                    },
                    {
                        "applicationID": 81,
                        "applicationName": "RBAC SuperUser PUT Test 1",
                        "description": "Testing requirement of SuperUser RBAC for save."
                    },
                    {
                        "applicationID": 82,
                        "applicationName": "Test 5FLR",
                        "description": "Test 5 flro1"
                    },
                    {
                        "applicationID": 83,
                        "applicationName": "Test 5FLR",
                        "description": "Test 5 flro1"
                    },
                    {
                        "applicationID": 86,
                        "applicationName": "SuperUser TJ1",
                        "description": "Testing for bug fix"
                    }
                ],
                "count": 13
            });
        }
    }]
};
mocks.push(application);

var pizza = {
    name: 'pizza',
    mockRoute: '\/api\/v1\/order\/.*', //a regex for the route, ex. '\/api\/steps\/.*\/users' is a valid route
    testScope: 'success', //success=200 & a scenario response | notFound=404 | error=500 and there's many more...
    testScenario: 'manyResults', //change this to one of hte scenario names below and restart the mock server to get new data
    latency: '500-3000', //add this line ot implement 1-5 seconds of random latency per call
    jsonTemplate: [{
        //you can use regular javascript to create objects to be served
        noResult: function() {
            return JSON.stringify({
                "result": [

                ]
            });
        },
        manyResults: function() {
            return JSON.stringify({
                "result": [
                    {
                        "bucketType": "Producing",
                        "prodDivision": "PeerSys",
                        "lineNum": "Sealine",
                        "description": "SmartSystems",
                        "itemNum": "35",
                        "productApproval": "Optiplex",
                        "qty": "100",
                        "unitDollars": "235.34",
                        "extDollars": "181.64",
                        "poLineNum": "68",
                        "cartonMarking": "CoreMax",
                        "groupNum": "67",
                        "notBeforeDate": "Wed Jun 24 2015 15:20:25 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 18 2015 05:27:11 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 08 2015 13:28:37 GMT+0000 (UTC)",
                        "revShipPromDate": "Sun Jun 14 2015 16:01:08 GMT+0000 (UTC)",
                        "pomName": "Proline",
                        "shipFromName": "MediaDime",
                        "producedQty": "13",
                        "prodStatus": "OmniTouch",
                        "shipmentNum": "22",
                        "shippingStatus": "Citisys",
                        "prodNotRecQty": "93",
                        "availToShipQty": "82",
                        "carrier": "Sealine",
                        "shipDate": "Fri Jun 05 2015 02:09:38 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sun Jun 28 2015 06:33:17 GMT+0000 (UTC)",
                        "proNum": "65",
                        "type": "StrategyLine",
                        "alerts": [
                            {
                                "alertType": "4000"
                            }
                        ],
                        "LineNum": 0
                    },
                    {
                        "bucketType": "Producing",
                        "prodDivision": "Helixicon",
                        "lineNum": "Helixicon",
                        "description": "Forecore",
                        "itemNum": "18",
                        "productApproval": "WestGate",
                        "qty": "84",
                        "unitDollars": "441.99",
                        "extDollars": "322.05",
                        "poLineNum": "25",
                        "cartonMarking": "StrategyLine",
                        "groupNum": "71",
                        "notBeforeDate": "Sat Jun 20 2015 05:42:47 GMT+0000 (UTC)",
                        "targetDate": "Wed Jun 03 2015 23:21:34 GMT+0000 (UTC)",
                        "shipPromDate": "Thu Jun 11 2015 22:33:51 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 29 2015 14:57:10 GMT+0000 (UTC)",
                        "pomName": "Celmax",
                        "shipFromName": "Eluxa",
                        "producedQty": "52",
                        "prodStatus": "OpenServ",
                        "shipmentNum": "27",
                        "shippingStatus": "VTGrafix",
                        "prodNotRecQty": "21",
                        "availToShipQty": "34",
                        "carrier": "Dynalab",
                        "shipDate": "Fri Jun 19 2015 08:35:35 GMT+0000 (UTC)",
                        "estDeliveryDate": "Wed Jun 24 2015 03:20:09 GMT+0000 (UTC)",
                        "proNum": "86",
                        "type": "Eluxa",
                        "alerts": [
                            {
                                "alertType": "1983"
                            }
                        ],
                        "LineNum": 1
                    },
                    {
                        "bucketType": "Producing",
                        "prodDivision": "MultiLingua",
                        "lineNum": "Sunopia",
                        "description": "CoreXTS",
                        "itemNum": "9",
                        "productApproval": "Haltheon",
                        "qty": "17",
                        "unitDollars": "282.49",
                        "extDollars": "266.77",
                        "poLineNum": "39",
                        "cartonMarking": "Qualcore",
                        "groupNum": "74",
                        "notBeforeDate": "Tue Jun 09 2015 17:30:18 GMT+0000 (UTC)",
                        "targetDate": "Fri Jun 12 2015 13:18:49 GMT+0000 (UTC)",
                        "shipPromDate": "Fri Jun 19 2015 12:16:20 GMT+0000 (UTC)",
                        "revShipPromDate": "Tue Jun 16 2015 11:52:46 GMT+0000 (UTC)",
                        "pomName": "OpenServ",
                        "shipFromName": "DuoServe",
                        "producedQty": "34",
                        "prodStatus": "QuadNet",
                        "shipmentNum": "89",
                        "shippingStatus": "DynaAir",
                        "prodNotRecQty": "49",
                        "availToShipQty": "87",
                        "carrier": "MediaDime",
                        "shipDate": "Thu Jun 11 2015 09:50:25 GMT+0000 (UTC)",
                        "estDeliveryDate": "Tue Jun 09 2015 17:44:12 GMT+0000 (UTC)",
                        "proNum": "72",
                        "type": "SixtySix",
                        "alerts": [
                            {
                                "alertType": "6534"
                            }
                        ],
                        "LineNum": 2
                    },
                    {
                        "bucketType": "Producing",
                        "prodDivision": "LoopSys",
                        "lineNum": "Creatonix",
                        "description": "Creatonix",
                        "itemNum": "19",
                        "productApproval": "DuoServe",
                        "qty": "86",
                        "unitDollars": "377.66",
                        "extDollars": "402.97",
                        "poLineNum": "26",
                        "cartonMarking": "Conixco",
                        "groupNum": "18",
                        "notBeforeDate": "Thu Jun 18 2015 21:22:27 GMT+0000 (UTC)",
                        "targetDate": "Fri Jun 05 2015 20:13:02 GMT+0000 (UTC)",
                        "shipPromDate": "Sun Jun 28 2015 01:20:08 GMT+0000 (UTC)",
                        "revShipPromDate": "Thu Jun 25 2015 15:13:02 GMT+0000 (UTC)",
                        "pomName": "Citisys",
                        "shipFromName": "Amsquare",
                        "producedQty": "41",
                        "prodStatus": "Opticast",
                        "shipmentNum": "74",
                        "shippingStatus": "Sophis",
                        "prodNotRecQty": "40",
                        "availToShipQty": "49",
                        "carrier": "Quadtek",
                        "shipDate": "Thu Jun 25 2015 22:38:28 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 08 2015 01:10:00 GMT+0000 (UTC)",
                        "proNum": "52",
                        "type": "Cirpria",
                        "alerts": [
                            {
                                "alertType": "2214"
                            }
                        ],
                        "LineNum": 3
                    },
                    {
                        "bucketType": "Producing",
                        "prodDivision": "Storex",
                        "lineNum": "Cryptonica",
                        "description": "WestGate",
                        "itemNum": "86",
                        "productApproval": "Protheon",
                        "qty": "44",
                        "unitDollars": "169.35",
                        "extDollars": "239.32",
                        "poLineNum": "3",
                        "cartonMarking": "Tecomix",
                        "groupNum": "27",
                        "notBeforeDate": "Thu Jun 18 2015 10:14:49 GMT+0000 (UTC)",
                        "targetDate": "Mon Jun 01 2015 01:50:43 GMT+0000 (UTC)",
                        "shipPromDate": "Sat Jun 06 2015 04:29:14 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 08 2015 15:11:47 GMT+0000 (UTC)",
                        "pomName": "Airconix",
                        "shipFromName": "Storex",
                        "producedQty": "87",
                        "prodStatus": "Kancom",
                        "shipmentNum": "11",
                        "shippingStatus": "Hypervision",
                        "prodNotRecQty": "82",
                        "availToShipQty": "6",
                        "carrier": "Storex",
                        "shipDate": "Thu Jun 18 2015 15:37:38 GMT+0000 (UTC)",
                        "estDeliveryDate": "Wed Jun 24 2015 20:22:23 GMT+0000 (UTC)",
                        "proNum": "33",
                        "type": "Sealine",
                        "alerts": [
                            {
                                "alertType": "6168"
                            }
                        ],
                        "LineNum": 4
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Cryosoft",
                        "lineNum": "ForeTrust",
                        "description": "Xenosys",
                        "itemNum": "74",
                        "productApproval": "TrioSys",
                        "qty": "71",
                        "unitDollars": "126.92",
                        "extDollars": "374.71",
                        "poLineNum": "51",
                        "cartonMarking": "Connic",
                        "groupNum": "78",
                        "notBeforeDate": "Tue Jun 02 2015 02:31:38 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 18 2015 00:36:00 GMT+0000 (UTC)",
                        "shipPromDate": "Tue Jun 02 2015 06:56:54 GMT+0000 (UTC)",
                        "revShipPromDate": "Wed Jun 24 2015 21:32:30 GMT+0000 (UTC)",
                        "pomName": "StrategyLine",
                        "shipFromName": "Iridimax",
                        "producedQty": "76",
                        "prodStatus": "Citisys",
                        "shipmentNum": "86",
                        "shippingStatus": "Helixicon",
                        "prodNotRecQty": "22",
                        "availToShipQty": "3",
                        "carrier": "Solexis",
                        "shipDate": "Sat Jun 06 2015 22:32:12 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 15 2015 07:05:35 GMT+0000 (UTC)",
                        "proNum": "11",
                        "type": "Cameratek",
                        "alerts": [
                            {
                                "alertType": "5693"
                            }
                        ],
                        "LineNum": 5
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Solexis",
                        "lineNum": "Sophis",
                        "description": "Thermolock",
                        "itemNum": "46",
                        "productApproval": "ForeTrust",
                        "qty": "45",
                        "unitDollars": "447.76",
                        "extDollars": "173.88",
                        "poLineNum": "71",
                        "cartonMarking": "Celmax",
                        "groupNum": "87",
                        "notBeforeDate": "Wed Jun 17 2015 01:32:35 GMT+0000 (UTC)",
                        "targetDate": "Sun Jun 28 2015 12:36:35 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 01 2015 18:18:46 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 01 2015 13:22:02 GMT+0000 (UTC)",
                        "pomName": "MediaDime",
                        "shipFromName": "TurboSystems",
                        "producedQty": "60",
                        "prodStatus": "Maxcast",
                        "shipmentNum": "7",
                        "shippingStatus": "SixtySix",
                        "prodNotRecQty": "68",
                        "availToShipQty": "90",
                        "carrier": "Unilogic",
                        "shipDate": "Sun Jun 07 2015 11:00:41 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 08 2015 22:38:21 GMT+0000 (UTC)",
                        "proNum": "67",
                        "type": "Maxcast",
                        "alerts": [
                            {
                                "alertType": "2039"
                            }
                        ],
                        "LineNum": 6
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Hypervision",
                        "lineNum": "CoreMax",
                        "description": "Anaplex",
                        "itemNum": "48",
                        "productApproval": "Conixco",
                        "qty": "94",
                        "unitDollars": "401.64",
                        "extDollars": "351.04",
                        "poLineNum": "84",
                        "cartonMarking": "Thermatek",
                        "groupNum": "12",
                        "notBeforeDate": "Wed Jun 10 2015 16:59:22 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 25 2015 05:27:00 GMT+0000 (UTC)",
                        "shipPromDate": "Sat Jun 27 2015 16:51:31 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 29 2015 07:20:54 GMT+0000 (UTC)",
                        "pomName": "Coolinga",
                        "shipFromName": "QuadNet",
                        "producedQty": "64",
                        "prodStatus": "Dynaroc",
                        "shipmentNum": "7",
                        "shippingStatus": "Kancom",
                        "prodNotRecQty": "70",
                        "availToShipQty": "44",
                        "carrier": "Airconix",
                        "shipDate": "Sun Jun 28 2015 10:40:40 GMT+0000 (UTC)",
                        "estDeliveryDate": "Tue Jun 23 2015 13:26:11 GMT+0000 (UTC)",
                        "proNum": "84",
                        "type": "ForeTrust",
                        "alerts": [
                            {
                                "alertType": "5724"
                            }
                        ],
                        "LineNum": 7
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Zatheon",
                        "lineNum": "Maxcast",
                        "description": "Haltheon",
                        "itemNum": "7",
                        "productApproval": "Unilogic",
                        "qty": "66",
                        "unitDollars": "319.16",
                        "extDollars": "238.12",
                        "poLineNum": "26",
                        "cartonMarking": "SkyCenta",
                        "groupNum": "15",
                        "notBeforeDate": "Mon Jun 08 2015 03:54:10 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 25 2015 06:01:48 GMT+0000 (UTC)",
                        "shipPromDate": "Sun Jun 21 2015 01:14:43 GMT+0000 (UTC)",
                        "revShipPromDate": "Tue Jun 02 2015 04:21:22 GMT+0000 (UTC)",
                        "pomName": "VTGrafix",
                        "shipFromName": "Sealine",
                        "producedQty": "58",
                        "prodStatus": "MultiServ",
                        "shipmentNum": "4",
                        "shippingStatus": "Conixco",
                        "prodNotRecQty": "36",
                        "availToShipQty": "9",
                        "carrier": "Bellgate",
                        "shipDate": "Fri Jun 05 2015 18:59:18 GMT+0000 (UTC)",
                        "estDeliveryDate": "Tue Jun 23 2015 09:22:00 GMT+0000 (UTC)",
                        "proNum": "64",
                        "type": "LexiconLabs",
                        "alerts": [
                            {
                                "alertType": "2381"
                            }
                        ],
                        "LineNum": 8
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Keycast",
                        "lineNum": "Galcom",
                        "description": "MultiLingua",
                        "itemNum": "90",
                        "productApproval": "VenStrategy",
                        "qty": "84",
                        "unitDollars": "342.42",
                        "extDollars": "396.49",
                        "poLineNum": "15",
                        "cartonMarking": "PeerSys",
                        "groupNum": "79",
                        "notBeforeDate": "Sun Jun 21 2015 18:19:41 GMT+0000 (UTC)",
                        "targetDate": "Sun Jun 21 2015 02:12:38 GMT+0000 (UTC)",
                        "shipPromDate": "Tue Jun 02 2015 10:28:39 GMT+0000 (UTC)",
                        "revShipPromDate": "Sat Jun 27 2015 07:03:22 GMT+0000 (UTC)",
                        "pomName": "Terrasys",
                        "shipFromName": "MultiServ",
                        "producedQty": "13",
                        "prodStatus": "Baramax",
                        "shipmentNum": "46",
                        "shippingStatus": "Sunopia",
                        "prodNotRecQty": "94",
                        "availToShipQty": "68",
                        "carrier": "StrategyLine",
                        "shipDate": "Thu Jun 11 2015 04:34:41 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sun Jun 07 2015 11:51:29 GMT+0000 (UTC)",
                        "proNum": "3",
                        "type": "Sealine",
                        "alerts": [
                            {
                                "alertType": "4696"
                            }
                        ],
                        "LineNum": 9
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Galcom",
                        "lineNum": "Cirpria",
                        "description": "Zatheon",
                        "itemNum": "28",
                        "productApproval": "TrueXT",
                        "qty": "27",
                        "unitDollars": "374.83",
                        "extDollars": "249.31",
                        "poLineNum": "16",
                        "cartonMarking": "Thermolock",
                        "groupNum": "17",
                        "notBeforeDate": "Sun Jun 21 2015 04:25:40 GMT+0000 (UTC)",
                        "targetDate": "Mon Jun 08 2015 23:25:13 GMT+0000 (UTC)",
                        "shipPromDate": "Sun Jun 14 2015 16:29:11 GMT+0000 (UTC)",
                        "revShipPromDate": "Sun Jun 07 2015 13:42:12 GMT+0000 (UTC)",
                        "pomName": "Creatonix",
                        "shipFromName": "Cameratek",
                        "producedQty": "68",
                        "prodStatus": "Connic",
                        "shipmentNum": "14",
                        "shippingStatus": "LexiconLabs",
                        "prodNotRecQty": "29",
                        "availToShipQty": "91",
                        "carrier": "Qualcore",
                        "shipDate": "Thu Jun 04 2015 10:47:11 GMT+0000 (UTC)",
                        "estDeliveryDate": "Thu Jun 11 2015 06:00:20 GMT+0000 (UTC)",
                        "proNum": "67",
                        "type": "Conixco",
                        "alerts": [
                            {
                                "alertType": "3037"
                            }
                        ],
                        "LineNum": 10
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "GrafixMedia",
                        "lineNum": "Nitrocam",
                        "description": "Protheon",
                        "itemNum": "66",
                        "productApproval": "DuoServe",
                        "qty": "47",
                        "unitDollars": "263.60",
                        "extDollars": "461.20",
                        "poLineNum": "79",
                        "cartonMarking": "Proline",
                        "groupNum": "46",
                        "notBeforeDate": "Sat Jun 06 2015 13:24:56 GMT+0000 (UTC)",
                        "targetDate": "Fri Jun 26 2015 05:24:42 GMT+0000 (UTC)",
                        "shipPromDate": "Tue Jun 09 2015 16:57:21 GMT+0000 (UTC)",
                        "revShipPromDate": "Wed Jun 17 2015 01:04:36 GMT+0000 (UTC)",
                        "pomName": "Unilogic",
                        "shipFromName": "Forecore",
                        "producedQty": "31",
                        "prodStatus": "Baramax",
                        "shipmentNum": "94",
                        "shippingStatus": "Britech",
                        "prodNotRecQty": "22",
                        "availToShipQty": "67",
                        "carrier": "Pancast",
                        "shipDate": "Mon Jun 08 2015 07:25:10 GMT+0000 (UTC)",
                        "estDeliveryDate": "Fri Jun 12 2015 20:53:13 GMT+0000 (UTC)",
                        "proNum": "32",
                        "type": "Citisys",
                        "alerts": [
                            {
                                "alertType": "4330"
                            }
                        ],
                        "LineNum": 11
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "CoreMax",
                        "lineNum": "Thermolock",
                        "description": "SmartSystems",
                        "itemNum": "45",
                        "productApproval": "Seelogic",
                        "qty": "83",
                        "unitDollars": "448.34",
                        "extDollars": "194.49",
                        "poLineNum": "34",
                        "cartonMarking": "Ulogica",
                        "groupNum": "40",
                        "notBeforeDate": "Sun Jun 07 2015 08:31:33 GMT+0000 (UTC)",
                        "targetDate": "Sun Jun 07 2015 19:37:44 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 22 2015 10:40:15 GMT+0000 (UTC)",
                        "revShipPromDate": "Sat Jun 06 2015 20:11:46 GMT+0000 (UTC)",
                        "pomName": "MultiServ",
                        "shipFromName": "FortyFour",
                        "producedQty": "14",
                        "prodStatus": "SkyCenta",
                        "shipmentNum": "94",
                        "shippingStatus": "Celmax",
                        "prodNotRecQty": "10",
                        "availToShipQty": "43",
                        "carrier": "Optiplex",
                        "shipDate": "Tue Jun 09 2015 07:35:36 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sun Jun 21 2015 13:11:23 GMT+0000 (UTC)",
                        "proNum": "54",
                        "type": "Templatek",
                        "alerts": [
                            {
                                "alertType": "2895"
                            }
                        ],
                        "LineNum": 12
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Sophis",
                        "lineNum": "Sunopia",
                        "description": "Seelogic",
                        "itemNum": "14",
                        "productApproval": "Terrasys",
                        "qty": "49",
                        "unitDollars": "119.79",
                        "extDollars": "146.50",
                        "poLineNum": "43",
                        "cartonMarking": "Infracom",
                        "groupNum": "61",
                        "notBeforeDate": "Thu Jun 11 2015 07:34:54 GMT+0000 (UTC)",
                        "targetDate": "Tue Jun 16 2015 03:23:34 GMT+0000 (UTC)",
                        "shipPromDate": "Sat Jun 20 2015 16:33:37 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 29 2015 06:13:58 GMT+0000 (UTC)",
                        "pomName": "Viewtopia",
                        "shipFromName": "Infracom",
                        "producedQty": "39",
                        "prodStatus": "FortyFour",
                        "shipmentNum": "5",
                        "shippingStatus": "SixtySix",
                        "prodNotRecQty": "84",
                        "availToShipQty": "48",
                        "carrier": "LoopSys",
                        "shipDate": "Thu Jun 11 2015 13:35:22 GMT+0000 (UTC)",
                        "estDeliveryDate": "Fri Jun 19 2015 02:31:03 GMT+0000 (UTC)",
                        "proNum": "27",
                        "type": "SmartSystems",
                        "alerts": [
                            {
                                "alertType": "4697"
                            }
                        ],
                        "LineNum": 13
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Amsquare",
                        "lineNum": "Anaplex",
                        "description": "Creatonix",
                        "itemNum": "95",
                        "productApproval": "Quadtek",
                        "qty": "7",
                        "unitDollars": "180.67",
                        "extDollars": "249.61",
                        "poLineNum": "26",
                        "cartonMarking": "Tecomix",
                        "groupNum": "34",
                        "notBeforeDate": "Mon Jun 01 2015 12:36:02 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 04 2015 02:42:07 GMT+0000 (UTC)",
                        "shipPromDate": "Thu Jun 04 2015 02:21:12 GMT+0000 (UTC)",
                        "revShipPromDate": "Tue Jun 16 2015 21:26:48 GMT+0000 (UTC)",
                        "pomName": "MultiServ",
                        "shipFromName": "WestGate",
                        "producedQty": "79",
                        "prodStatus": "Quadtek",
                        "shipmentNum": "73",
                        "shippingStatus": "VTGrafix",
                        "prodNotRecQty": "91",
                        "availToShipQty": "77",
                        "carrier": "QuadNet",
                        "shipDate": "Sat Jun 13 2015 21:41:28 GMT+0000 (UTC)",
                        "estDeliveryDate": "Thu Jun 04 2015 21:10:15 GMT+0000 (UTC)",
                        "proNum": "61",
                        "type": "Solexis",
                        "alerts": [
                            {
                                "alertType": "6033"
                            }
                        ],
                        "LineNum": 14
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Helixicon",
                        "lineNum": "Amsquare",
                        "description": "Templatek",
                        "itemNum": "92",
                        "productApproval": "Citisys",
                        "qty": "1",
                        "unitDollars": "208.58",
                        "extDollars": "201.56",
                        "poLineNum": "82",
                        "cartonMarking": "Templatek",
                        "groupNum": "89",
                        "notBeforeDate": "Fri Jun 19 2015 12:01:44 GMT+0000 (UTC)",
                        "targetDate": "Sun Jun 07 2015 09:38:14 GMT+0000 (UTC)",
                        "shipPromDate": "Wed Jun 03 2015 20:12:59 GMT+0000 (UTC)",
                        "revShipPromDate": "Fri Jun 19 2015 21:18:51 GMT+0000 (UTC)",
                        "pomName": "Keysoft",
                        "shipFromName": "Xenosys",
                        "producedQty": "30",
                        "prodStatus": "Bellgate",
                        "shipmentNum": "11",
                        "shippingStatus": "Eluxa",
                        "prodNotRecQty": "43",
                        "availToShipQty": "87",
                        "carrier": "MediaDime",
                        "shipDate": "Fri Jun 05 2015 14:41:03 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 01 2015 10:05:25 GMT+0000 (UTC)",
                        "proNum": "50",
                        "type": "VenStrategy",
                        "alerts": [
                            {
                                "alertType": "5783"
                            }
                        ],
                        "LineNum": 15
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Seelogic",
                        "lineNum": "Conixco",
                        "description": "TrueXT",
                        "itemNum": "99",
                        "productApproval": "MultiLingua",
                        "qty": "38",
                        "unitDollars": "494.40",
                        "extDollars": "426.58",
                        "poLineNum": "68",
                        "cartonMarking": "Xenosys",
                        "groupNum": "1",
                        "notBeforeDate": "Wed Jun 03 2015 19:03:23 GMT+0000 (UTC)",
                        "targetDate": "Sat Jun 27 2015 14:24:12 GMT+0000 (UTC)",
                        "shipPromDate": "Thu Jun 18 2015 16:48:31 GMT+0000 (UTC)",
                        "revShipPromDate": "Sun Jun 21 2015 05:59:36 GMT+0000 (UTC)",
                        "pomName": "VenStrategy",
                        "shipFromName": "Creatonix",
                        "producedQty": "76",
                        "prodStatus": "CoreMax",
                        "shipmentNum": "16",
                        "shippingStatus": "Seelogic",
                        "prodNotRecQty": "85",
                        "availToShipQty": "80",
                        "carrier": "Chromaton",
                        "shipDate": "Mon Jun 08 2015 23:48:57 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sat Jun 06 2015 14:40:59 GMT+0000 (UTC)",
                        "proNum": "89",
                        "type": "OmniTouch",
                        "alerts": [
                            {
                                "alertType": "5946"
                            }
                        ],
                        "LineNum": 16
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "PeerSys",
                        "lineNum": "Cryptonica",
                        "description": "Airconix",
                        "itemNum": "51",
                        "productApproval": "TurboSystems",
                        "qty": "95",
                        "unitDollars": "324.96",
                        "extDollars": "412.40",
                        "poLineNum": "92",
                        "cartonMarking": "SixtySix",
                        "groupNum": "25",
                        "notBeforeDate": "Fri Jun 19 2015 08:05:33 GMT+0000 (UTC)",
                        "targetDate": "Tue Jun 02 2015 06:58:09 GMT+0000 (UTC)",
                        "shipPromDate": "Tue Jun 09 2015 20:57:30 GMT+0000 (UTC)",
                        "revShipPromDate": "Sat Jun 20 2015 13:12:36 GMT+0000 (UTC)",
                        "pomName": "SmartSystems",
                        "shipFromName": "Tomiatech",
                        "producedQty": "37",
                        "prodStatus": "SixtySix",
                        "shipmentNum": "0",
                        "shippingStatus": "Nitrocam",
                        "prodNotRecQty": "61",
                        "availToShipQty": "50",
                        "carrier": "Cameratek",
                        "shipDate": "Thu Jun 25 2015 23:16:05 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 01 2015 10:42:21 GMT+0000 (UTC)",
                        "proNum": "75",
                        "type": "Celmax",
                        "alerts": [
                            {
                                "alertType": "6645"
                            }
                        ],
                        "LineNum": 17
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Sophis",
                        "lineNum": "Terrasys",
                        "description": "LexiconLabs",
                        "itemNum": "92",
                        "productApproval": "Qualcore",
                        "qty": "56",
                        "unitDollars": "455.28",
                        "extDollars": "246.55",
                        "poLineNum": "68",
                        "cartonMarking": "Playtech",
                        "groupNum": "58",
                        "notBeforeDate": "Tue Jun 09 2015 07:37:56 GMT+0000 (UTC)",
                        "targetDate": "Wed Jun 03 2015 13:06:03 GMT+0000 (UTC)",
                        "shipPromDate": "Wed Jun 17 2015 23:12:33 GMT+0000 (UTC)",
                        "revShipPromDate": "Sat Jun 20 2015 02:09:12 GMT+0000 (UTC)",
                        "pomName": "Airconix",
                        "shipFromName": "Terrasys",
                        "producedQty": "24",
                        "prodStatus": "Thermolock",
                        "shipmentNum": "87",
                        "shippingStatus": "Iridimax",
                        "prodNotRecQty": "16",
                        "availToShipQty": "9",
                        "carrier": "Playtech",
                        "shipDate": "Tue Jun 16 2015 06:24:41 GMT+0000 (UTC)",
                        "estDeliveryDate": "Tue Jun 02 2015 13:08:11 GMT+0000 (UTC)",
                        "proNum": "68",
                        "type": "FastFreight",
                        "alerts": [
                            {
                                "alertType": "5693"
                            }
                        ],
                        "LineNum": 18
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Sealine",
                        "lineNum": "CoreRobotics",
                        "description": "DynaAir",
                        "itemNum": "19",
                        "productApproval": "Dalserve",
                        "qty": "61",
                        "unitDollars": "204.54",
                        "extDollars": "108.11",
                        "poLineNum": "46",
                        "cartonMarking": "Celmax",
                        "groupNum": "16",
                        "notBeforeDate": "Sat Jun 27 2015 10:20:47 GMT+0000 (UTC)",
                        "targetDate": "Mon Jun 15 2015 06:40:46 GMT+0000 (UTC)",
                        "shipPromDate": "Wed Jun 10 2015 11:15:41 GMT+0000 (UTC)",
                        "revShipPromDate": "Sun Jun 21 2015 10:27:41 GMT+0000 (UTC)",
                        "pomName": "Connic",
                        "shipFromName": "TurboSystems",
                        "producedQty": "24",
                        "prodStatus": "Playtech",
                        "shipmentNum": "54",
                        "shippingStatus": "Galcom",
                        "prodNotRecQty": "54",
                        "availToShipQty": "19",
                        "carrier": "CoreXTS",
                        "shipDate": "Tue Jun 16 2015 16:21:54 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 15 2015 13:40:12 GMT+0000 (UTC)",
                        "proNum": "1",
                        "type": "Haltheon",
                        "alerts": [
                            {
                                "alertType": "4722"
                            }
                        ],
                        "LineNum": 19
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "CorpTek",
                        "lineNum": "PeerSys",
                        "description": "CoreXTS",
                        "itemNum": "82",
                        "productApproval": "FortyFour",
                        "qty": "84",
                        "unitDollars": "135.26",
                        "extDollars": "493.30",
                        "poLineNum": "43",
                        "cartonMarking": "Logico",
                        "groupNum": "8",
                        "notBeforeDate": "Tue Jun 09 2015 16:12:13 GMT+0000 (UTC)",
                        "targetDate": "Wed Jun 17 2015 12:39:14 GMT+0000 (UTC)",
                        "shipPromDate": "Tue Jun 16 2015 16:03:14 GMT+0000 (UTC)",
                        "revShipPromDate": "Thu Jun 11 2015 05:20:19 GMT+0000 (UTC)",
                        "pomName": "Anaplex",
                        "shipFromName": "Tecomix",
                        "producedQty": "78",
                        "prodStatus": "FortyFour",
                        "shipmentNum": "35",
                        "shippingStatus": "Optiplex",
                        "prodNotRecQty": "59",
                        "availToShipQty": "36",
                        "carrier": "PeerSys",
                        "shipDate": "Thu Jun 18 2015 13:39:00 GMT+0000 (UTC)",
                        "estDeliveryDate": "Mon Jun 15 2015 21:51:39 GMT+0000 (UTC)",
                        "proNum": "88",
                        "type": "MultiLingua",
                        "alerts": [
                            {
                                "alertType": "6752"
                            }
                        ],
                        "LineNum": 20
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Hypervision",
                        "lineNum": "DynaAir",
                        "description": "Westercom",
                        "itemNum": "70",
                        "productApproval": "Dynalab",
                        "qty": "88",
                        "unitDollars": "487.03",
                        "extDollars": "272.14",
                        "poLineNum": "91",
                        "cartonMarking": "Thermolock",
                        "groupNum": "37",
                        "notBeforeDate": "Mon Jun 29 2015 17:45:17 GMT+0000 (UTC)",
                        "targetDate": "Tue Jun 16 2015 19:33:58 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 15 2015 21:31:43 GMT+0000 (UTC)",
                        "revShipPromDate": "Thu Jun 11 2015 21:35:45 GMT+0000 (UTC)",
                        "pomName": "Proline",
                        "shipFromName": "Baramax",
                        "producedQty": "5",
                        "prodStatus": "Solexis",
                        "shipmentNum": "58",
                        "shippingStatus": "Optiplex",
                        "prodNotRecQty": "68",
                        "availToShipQty": "4",
                        "carrier": "Dynaroc",
                        "shipDate": "Tue Jun 23 2015 06:34:05 GMT+0000 (UTC)",
                        "estDeliveryDate": "Thu Jun 11 2015 04:54:57 GMT+0000 (UTC)",
                        "proNum": "67",
                        "type": "LoopSys",
                        "alerts": [
                            {
                                "alertType": "6346"
                            }
                        ],
                        "LineNum": 21
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Terrasys",
                        "lineNum": "Cryosoft",
                        "description": "FortyFour",
                        "itemNum": "5",
                        "productApproval": "Dalserve",
                        "qty": "93",
                        "unitDollars": "416.82",
                        "extDollars": "295.32",
                        "poLineNum": "68",
                        "cartonMarking": "Chromaton",
                        "groupNum": "93",
                        "notBeforeDate": "Mon Jun 08 2015 03:12:51 GMT+0000 (UTC)",
                        "targetDate": "Mon Jun 01 2015 18:23:23 GMT+0000 (UTC)",
                        "shipPromDate": "Thu Jun 25 2015 17:29:14 GMT+0000 (UTC)",
                        "revShipPromDate": "Thu Jun 18 2015 20:09:21 GMT+0000 (UTC)",
                        "pomName": "Terralabs",
                        "shipFromName": "SmartSystems",
                        "producedQty": "21",
                        "prodStatus": "Citisys",
                        "shipmentNum": "41",
                        "shippingStatus": "SixtySix",
                        "prodNotRecQty": "75",
                        "availToShipQty": "38",
                        "carrier": "TrioSys",
                        "shipDate": "Tue Jun 23 2015 22:52:20 GMT+0000 (UTC)",
                        "estDeliveryDate": "Thu Jun 04 2015 12:26:28 GMT+0000 (UTC)",
                        "proNum": "56",
                        "type": "Quadtek",
                        "alerts": [
                            {
                                "alertType": "6858"
                            }
                        ],
                        "LineNum": 22
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Bellgate",
                        "lineNum": "Kancom",
                        "description": "Britech",
                        "itemNum": "42",
                        "productApproval": "Cryosoft",
                        "qty": "62",
                        "unitDollars": "271.41",
                        "extDollars": "374.96",
                        "poLineNum": "11",
                        "cartonMarking": "LoopSys",
                        "groupNum": "30",
                        "notBeforeDate": "Sat Jun 20 2015 07:18:52 GMT+0000 (UTC)",
                        "targetDate": "Sun Jun 07 2015 05:51:24 GMT+0000 (UTC)",
                        "shipPromDate": "Fri Jun 26 2015 10:56:05 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 22 2015 04:57:11 GMT+0000 (UTC)",
                        "pomName": "Zatheon",
                        "shipFromName": "WestGate",
                        "producedQty": "44",
                        "prodStatus": "Pancast",
                        "shipmentNum": "34",
                        "shippingStatus": "SixtySix",
                        "prodNotRecQty": "19",
                        "availToShipQty": "62",
                        "carrier": "Opticast",
                        "shipDate": "Wed Jun 17 2015 12:53:06 GMT+0000 (UTC)",
                        "estDeliveryDate": "Fri Jun 12 2015 21:32:02 GMT+0000 (UTC)",
                        "proNum": "95",
                        "type": "Sophis",
                        "alerts": [
                            {
                                "alertType": "3304"
                            }
                        ],
                        "LineNum": 23
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "SkyCenta",
                        "lineNum": "SmartSystems",
                        "description": "SmartSystems",
                        "itemNum": "99",
                        "productApproval": "WestGate",
                        "qty": "9",
                        "unitDollars": "231.75",
                        "extDollars": "374.39",
                        "poLineNum": "42",
                        "cartonMarking": "OmniTouch",
                        "groupNum": "47",
                        "notBeforeDate": "Sat Jun 27 2015 14:46:07 GMT+0000 (UTC)",
                        "targetDate": "Tue Jun 16 2015 14:04:53 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 29 2015 23:41:59 GMT+0000 (UTC)",
                        "revShipPromDate": "Wed Jun 24 2015 06:09:34 GMT+0000 (UTC)",
                        "pomName": "MultiLingua",
                        "shipFromName": "Cirpria",
                        "producedQty": "30",
                        "prodStatus": "Quadtek",
                        "shipmentNum": "41",
                        "shippingStatus": "Viewtopia",
                        "prodNotRecQty": "100",
                        "availToShipQty": "95",
                        "carrier": "FastMart",
                        "shipDate": "Fri Jun 26 2015 03:51:44 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sun Jun 07 2015 16:20:28 GMT+0000 (UTC)",
                        "proNum": "62",
                        "type": "LoopSys",
                        "alerts": [
                            {
                                "alertType": "5339"
                            }
                        ],
                        "LineNum": 24
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Protheon",
                        "lineNum": "CoreXTS",
                        "description": "Creatonix",
                        "itemNum": "0",
                        "productApproval": "DynaAir",
                        "qty": "78",
                        "unitDollars": "273.41",
                        "extDollars": "495.77",
                        "poLineNum": "27",
                        "cartonMarking": "LoopSys",
                        "groupNum": "36",
                        "notBeforeDate": "Thu Jun 11 2015 01:23:45 GMT+0000 (UTC)",
                        "targetDate": "Fri Jun 12 2015 14:51:26 GMT+0000 (UTC)",
                        "shipPromDate": "Thu Jun 25 2015 04:38:47 GMT+0000 (UTC)",
                        "revShipPromDate": "Thu Jun 18 2015 03:18:02 GMT+0000 (UTC)",
                        "pomName": "Cryptonica",
                        "shipFromName": "Hypervision",
                        "producedQty": "7",
                        "prodStatus": "Haltheon",
                        "shipmentNum": "22",
                        "shippingStatus": "Infracom",
                        "prodNotRecQty": "94",
                        "availToShipQty": "39",
                        "carrier": "Thermatek",
                        "shipDate": "Tue Jun 23 2015 22:03:03 GMT+0000 (UTC)",
                        "estDeliveryDate": "Thu Jun 04 2015 09:08:58 GMT+0000 (UTC)",
                        "proNum": "81",
                        "type": "Superwire",
                        "alerts": [
                            {
                                "alertType": "1523"
                            }
                        ],
                        "LineNum": 25
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Infratouch",
                        "lineNum": "Optiplex",
                        "description": "Viewtopia",
                        "itemNum": "3",
                        "productApproval": "Protheon",
                        "qty": "20",
                        "unitDollars": "198.10",
                        "extDollars": "292.34",
                        "poLineNum": "13",
                        "cartonMarking": "OmniTouch",
                        "groupNum": "98",
                        "notBeforeDate": "Sun Jun 07 2015 22:10:30 GMT+0000 (UTC)",
                        "targetDate": "Sat Jun 13 2015 04:01:52 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 29 2015 16:09:26 GMT+0000 (UTC)",
                        "revShipPromDate": "Mon Jun 15 2015 03:19:57 GMT+0000 (UTC)",
                        "pomName": "Ulogica",
                        "shipFromName": "Dalserve",
                        "producedQty": "42",
                        "prodStatus": "Opticast",
                        "shipmentNum": "45",
                        "shippingStatus": "Nitrocam",
                        "prodNotRecQty": "87",
                        "availToShipQty": "52",
                        "carrier": "MediaDime",
                        "shipDate": "Sat Jun 20 2015 07:15:40 GMT+0000 (UTC)",
                        "estDeliveryDate": "Fri Jun 05 2015 16:46:11 GMT+0000 (UTC)",
                        "proNum": "69",
                        "type": "Cryosoft",
                        "alerts": [
                            {
                                "alertType": "3955"
                            }
                        ],
                        "LineNum": 26
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Opticast",
                        "lineNum": "VenStrategy",
                        "description": "Xenosys",
                        "itemNum": "75",
                        "productApproval": "StrategyLine",
                        "qty": "55",
                        "unitDollars": "452.84",
                        "extDollars": "443.97",
                        "poLineNum": "8",
                        "cartonMarking": "Sunopia",
                        "groupNum": "18",
                        "notBeforeDate": "Wed Jun 03 2015 17:09:20 GMT+0000 (UTC)",
                        "targetDate": "Fri Jun 12 2015 11:04:57 GMT+0000 (UTC)",
                        "shipPromDate": "Sun Jun 21 2015 09:46:45 GMT+0000 (UTC)",
                        "revShipPromDate": "Tue Jun 02 2015 13:40:05 GMT+0000 (UTC)",
                        "pomName": "Tecomix",
                        "shipFromName": "CoreXTS",
                        "producedQty": "49",
                        "prodStatus": "Airconix",
                        "shipmentNum": "56",
                        "shippingStatus": "Unilogic",
                        "prodNotRecQty": "16",
                        "availToShipQty": "48",
                        "carrier": "SkyCenta",
                        "shipDate": "Mon Jun 01 2015 06:10:51 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sun Jun 21 2015 19:56:43 GMT+0000 (UTC)",
                        "proNum": "49",
                        "type": "Galcom",
                        "alerts": [
                            {
                                "alertType": "6989"
                            }
                        ],
                        "LineNum": 27
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Optiplex",
                        "lineNum": "Logico",
                        "description": "CoreMax",
                        "itemNum": "30",
                        "productApproval": "Unilogic",
                        "qty": "64",
                        "unitDollars": "388.30",
                        "extDollars": "446.58",
                        "poLineNum": "39",
                        "cartonMarking": "QuadNet",
                        "groupNum": "76",
                        "notBeforeDate": "Thu Jun 25 2015 14:51:00 GMT+0000 (UTC)",
                        "targetDate": "Thu Jun 25 2015 13:04:05 GMT+0000 (UTC)",
                        "shipPromDate": "Mon Jun 08 2015 14:22:45 GMT+0000 (UTC)",
                        "revShipPromDate": "Tue Jun 09 2015 16:42:02 GMT+0000 (UTC)",
                        "pomName": "Baramax",
                        "shipFromName": "LexiconLabs",
                        "producedQty": "37",
                        "prodStatus": "Creatonix",
                        "shipmentNum": "8",
                        "shippingStatus": "Creatonix",
                        "prodNotRecQty": "65",
                        "availToShipQty": "49",
                        "carrier": "Bellgate",
                        "shipDate": "Sun Jun 21 2015 16:41:57 GMT+0000 (UTC)",
                        "estDeliveryDate": "Tue Jun 16 2015 15:14:42 GMT+0000 (UTC)",
                        "proNum": "28",
                        "type": "Sealine",
                        "alerts": [
                            {
                                "alertType": "2265"
                            }
                        ],
                        "LineNum": 28
                    },
                    {
                        "bucketType": "Scheduled",
                        "prodDivision": "Proline",
                        "lineNum": "Bellgate",
                        "description": "SmartSystems",
                        "itemNum": "71",
                        "productApproval": "MultiServ",
                        "qty": "10",
                        "unitDollars": "200.94",
                        "extDollars": "456.06",
                        "poLineNum": "49",
                        "cartonMarking": "Hivemind",
                        "groupNum": "92",
                        "notBeforeDate": "Sat Jun 13 2015 10:09:16 GMT+0000 (UTC)",
                        "targetDate": "Sat Jun 06 2015 13:33:30 GMT+0000 (UTC)",
                        "shipPromDate": "Wed Jun 24 2015 05:59:11 GMT+0000 (UTC)",
                        "revShipPromDate": "Sat Jun 20 2015 03:36:32 GMT+0000 (UTC)",
                        "pomName": "Terralabs",
                        "shipFromName": "FortyFour",
                        "producedQty": "93",
                        "prodStatus": "Iridimax",
                        "shipmentNum": "13",
                        "shippingStatus": "Pancast",
                        "prodNotRecQty": "25",
                        "availToShipQty": "88",
                        "carrier": "Haltheon",
                        "shipDate": "Fri Jun 05 2015 16:52:10 GMT+0000 (UTC)",
                        "estDeliveryDate": "Sat Jun 20 2015 01:56:56 GMT+0000 (UTC)",
                        "proNum": "45",
                        "type": "WestGate",
                        "alerts": [
                            {
                                "alertType": "1574"
                            }
                        ],
                        "LineNum": 29
                    }
                ]
            });
        },
        multipleResults: function () {
            var result = [];
            var count = 30;
            for (var i = 0; i < count; i++) {
                result.push(JSON.parse(JSON.stringify(schemas.line)));
                result[i].LineNum = i;
                if(i >= 0 && i <=4){
                    result[i].bucketType = "Producing"
                }
                if(i >= 5 && i <=9){
                    result[i].bucketType = "Scheduled"
                }
                if(i >= 10 && i <=14){
                    result[i].bucketType = "Scheduled"
                }
                if(i >= 15 && i <=19){
                    result[i].bucketType = "Scheduled"
                }
                if(i >= 20 && i <=24){
                    result[i].bucketType = "Scheduled"
                }
                if(i >= 25){
                    result[i].bucketType = "Scheduled"
                }
            }
            return JSON.stringify({
                result: result
            });
        }
    }]
};
mocks.push(pizza);

exports.mocks = mocks;
