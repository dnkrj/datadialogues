var messages = [{type: 'intro', text: "You are Skye, 21, in Inverness"}, {type: 'intro', text: "You are running on the exercise machine in the Merkinch gym."},
	{type: 'intro', text: "As soon as you finish your exercise you get a notification on your phone and smart watch at the same time"},
	{choice: 5, text: "Check phone"},
	{choice: 6, pause: true, text: "Check smart watch"},
	{type:'received', next: 4, text: "Your phone is in your bag. It is too much effort to retrieve"},
	{type:'received', text: "You have a notification from your exercise app. It reads:"},
	{type:'received', text: "“Nice session Skye! Would you like to beta test our new daily trainer features?”"},
	{choice: 10, text: "Beta testing sounds cool"},
	{choice: 11, pause: true, text: "Ooh new features!"},
	{next: 12, text: "You like the sound of being a beta tester"},
	{text: "You always like it when apps have new features"},
	{text: "You tap the notification"},
	{type:'received', text: "“LEAVE NOTHING TO CHANCE”"},
	{type:'received', text: "“Our new programme sends you free smart scales for exercise.”"},
	{type:'received', text: "“They communicate wirelessly with the app to improve the our analysis”"},
	{type:'received', text: "“Power through precision™”"},
	{choice: 19, text: "Definitely sign up!"},
	{choice: 22, pause: true, text: "Maybe I'll read a little deeper…"},
	{text: "You really like the sound of wireless integration."},
	{text: "Entering your own information is such a bore!"},
	{next: 31, text: "You sign up"},
	{text: "You click read more"},
	{type:'received', text: "“Your data is used to optimise our product”"},
	{type:'received', text: "“We know how sensitive data about your weight is”"},
	{type:'received', text: "“We will never share it with third parties without your permission”"},
	{text: "You find this reassuring"},
	{choice: 28, pause: true, text: "Sign up"},
	{text: "Data about your weight is quite sensitive"},
	{text: "But it sounds like a cool service"},
	{text: "and you don’t mind sharing it for a better experience"},
	{type:'received', audio: "ping", text: "2 hours later you are walking home by the canal and get another ping from your watch - its the app again:"},
	{type:'received', text: "“SHARING IS CARING”"},
	{type:'received', text: "“The NHS needs our help! You could save lives by sharing your heart rate data with NHS researchers today.”"},
	{choice: 36, text: "Why should I?"},
	{choice: 39, pause: true, text: "Not relevant for me"},
	{text: "No thanks, pal."},
	{text: "You are perfectly healthy and don’t see why its your job to share that kind of data"},
	{next: 42, text: "You dismiss the notification and spend a while on Instagram"},
	{text: "That's just spam"},
	{text: "It's not relevant or personalised for you and you know it"},
	{text: "You dismiss the notification and spend a while on Instagram"},
	{type:'received', audio: "ping", text: "“Ping!”"},
	{type:'received', text: "The app is particularly active today"},
	{type:'received', text: "“Access your exercise data like never before!”"},
	{type:'received', text: "“New analytical features will help you master your fitness”"},
	{type:'received', text: "“Simply enable us to share your data with third parties”"},
	{type:'received', text: "“So we can make fitness that works for YOU”"},
	{choice: 50, text: "Personalised fitness!"},
	{choice: 55, pause: true, text: "Access to my data!"},
	{text: "Aye!"},
	{text: "You really like the idea of personalised fitness"},
	{text: "So many apps just don't know what you like"},
	{next: 57, text: "And you need a fitness plan that works for you"},
	{text: "Aye!"},
	{text: "You really like being able to access your own data"},
	{text: "Then you can take more control over your exercise"},
	{text: "You enable sharing"},
	{type:'received', text: "“We hope you’re loving our app!”"},
	{type:'received', text: "“Please rate us”"},
	{choice: 61, pause: true, text: "I am!"},
	{pause: true, text: "You give them 5/5"},
]
