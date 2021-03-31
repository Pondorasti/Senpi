/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
   			module: 'MMM-Remote-Control',
   			// position: 'bottom_left',
    			config: {
       				customCommand: {},  // Optional, See "Using Custom Commands" below
        			showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        			// uncomment any of the lines below if you're gonna use it
        			// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        			// apiKey: "",         // Optional, See API/README.md for details
    			}
		},
// 		{
// 			module: 'MMM-Xmas',
// 			position: 'fullscreen_above'
// 		},
		{
			module: 'MMM-Snow',
			// position: 'fullscreen_above',
			config: {
				flakeCount: 100,
				theme: "winter"
			}
		},
		{
			module: 'MMM-Screencast',
			position: 'center', // This position is for a hidden <div /> and not the screencast window
			config: {
				position: 'center',
				height: 600,
				width: 800,
			}
        	},
		{
			module: "MMM-GooglePhotos",
  			position: "fullscreen_below",
  			config: {
				albums: ["MS Shenanigans"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 1000 * 60, // minimum 10 seconds.
				sort: "random", // "old", "random", "new"
				uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				condition: {
					fromDate: null, // Or "2018-03", RFC ... format available
					toDate: null, // Or "2019-12-25",
					minWidth: null, // Or 400
					maxWidth: null, // Or 8000
					minHeight: null, // Or 400
					maxHeight: null, // Or 8000
					minWHRatio: null,
					maxWHRatio: null,
					// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				},
				showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				showHeight: 1920,
				timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
  			}
		},
		{
			module: 'MMM-iFrame-Ping',
			position: 'bottom_bar',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				url: "https://alexandru.so/secret/github-contributions/",
				autoRefresh: true,
				updateInterval: 60, // minutes
				displayLastUpdate: false,
				width: "100%",
				height: "160px",
			}
		},
		{
 			module: 'MMM-Tools',
  			position: 'bottom_right',
  			config: {
    				refresh: 1000 * 5,
    				containerSize: null,
    				itemSize: null,
				CPU: {
					displayType: false
				},
				STORAGE: {
					displayStorage: false
				},
				OS: {
					displayOs: false
				},
				NETWORK: {
					displayNetwork: false
				},
				UPTIME: {
					displayRecord: false,
					useMagicMirror: false,
				}
  			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			// displaySymbol: false,
			config: {
				calendars: [
					{
						symbol: "graduation-cap",
						maximumNumberOfDays: 2,
						url: "webcal://calendar.google.com/calendar/ical/alexandru.turcanu%40students.makeschool.com/public/basic.ics"
					},
					{
						symbol: "user",
						maximumNumberOfDays: 2,
						url: "webcal://calendar.google.com/calendar/ical/pondorasti%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "San Francisco",
				locationID: "5391959", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "b54a673c55389052bff815337a3223da"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "San Francisco",
				locationID: "5391959", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "b54a673c55389052bff815337a3223da"
			}
		},
		{
			module: "newsfeed",
			// position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
