var messages = [{type: 'intro', text: "You are Ewan, age 18, in Kirkwall"}, {type: 'intro', text: "It's late at night and you’ve got a lot on your mind."},
	{type: 'intro', text: "You've installed an app on your phone called TalkMe."},
	{choice: 4, pause: true, text: "Open the app"},
	{type:"received", audio:"pingin", text: "Hi, welcome to TalkMe."},
	{type:"received", text: "My name is Brian and I’m your AI host."},
	{type:"received", text: "How can I help you today?"},
	{audio:"pingout", text: "What can I ask about on here?"},
	{type:"received", audio:"pingin", text: "I can advise you on anything health related."},
	{type:"received", text: "Or we can just chat"},
	{type:"received", text: "What's on your mind?"},
	{choice: 13, text: "It's kinda sensitive"},
	{choice: 19, pause: true, text: "Is this app confidential?"},
	{audio:"pingout", text: "It's kinda sensitive"},
	{text: "And about more than just health"},
	{text: "I don’t want people I know to find out. Kirkwall’s small. All of Mainland is small."},
	{type:"received", audio:"pingin", text: "Of course"},
	{type:"received", text: "TalkMe will never share information about you without your consent."},
	{type:"received", next: 24, text: "What's on your mind?"},
	{audio:"pingout", text: "Is this app confidential?"},
	{text: "I don’t want people i know to find out"},
	{type:"received", audio:"pingin", text: "TalkMe will never share information about you without your consent."},
	{type:"received", text: "But we do store your data in case you want to access it in the future."},
	{type:"received", text: "So what's on your mind?"},
	{choice: 26, text: "It's complicated"},
	{choice: 36, pause: true, text: "It’s my pal…"},
	{audio:"pingout", text: "Ok"},
	{text: "So it's kinda complicated"},
	{text: "I’m really tired all the time"},
	{text: "I’m worried it might be an STD"},
	{text: "Or it might be depression."},
	{text: "I had sex with my friend Callum."},
	{text: "He’s gay but, I don’t know whether I’m gay, or bi or what."},
	{text: "And I might have caught something"},
	{text: "Or given him something."},
	{next: 43, text: "I don’t know"},
	{audio:"pingout", text: "It’s my pal Callum"},
	{text: "We had sex. He’s gay and I think I am too, or bi. I don’t know."},
	{text: "He’s tired all the time and so am I."},
	{text: "I’m worried I might have and an STD"},
	{text: "and that I’ve given it to him."},
	{text: "But I also think I might just be depressed."},
	{text: "I don’t know"},
	{type:"received", audio:"pingin", text: "I see"},
	{type:"received", text: "That sounds difficult"},
	{type:"received", text: "Have you tried speaking to a doctor about this problem?"},
	{choice: 48, text: "I was too embarrassed"},
	{choice: 50, pause: true, text: "He wasn't getting me"},
	{audio:"pingout", text: "Yeah but I was too embarrassed."},
	{next: 53, text: "I don’t think they’d understand"},
	{audio:"pingout", text: "Yeah but he wasn’t getting me"},
	{text: "He only wanted to talk about STDs"},
	{text: "It's bigger than that"},
	{type:"received", audio:"pingin", text: "I see"},
	{type:"received", text: "It sounds like your doctor's appointment didn't go well."},
	{type:"received", text: "Is that correct?"},
	{choice: 57, pause: true, text: "Yes"},
	{audio:"pingout", text: "Yes"},
	{type:"received", audio:"pingin", text: "That sounds tough"},
	{type:"received", text: "Would you be interested in speaking to a specialist about this problem?"},
	{type:"received", text: "It could be done remotely so you can speak to someone who won’t know you"},
	{type:"received", text: "The specialist might understand your situation better"},
	{choice: 64, text: "Yeah ok"},
	{choice: 65, pause: true, text: "Specialist in what?"},
	{next: 71, audio:"pingout", text: "Yeah ok"},
	{audio:"pingout", text: "Specialist in what?"},
	{type:"received", audio:"pingin", text: "I would recommend a specialist in Sexual health"},
	{type:"received", text: "These specialists are trained in bias avoidance and understanding complex situations"},
	{choice: 69, pause: true, text: "Yeah"},
	{audio:"pingout", text: "Yeah"},
	{text: "That sounds good"},
	{type:"received", audio:"pingin", text: "Great!"},
	{type:"received", text: "Would you be happy for data from our conversation to be shared to inform your appointment?"},
	{choice: 75, text: "I’m not sure."},
	{choice: 84, pause: true, text: "Why?"},
	{audio:"pingout", text: "I’m not sure"},
	{text: "I don't want to be understood by a number."},
	{text: "But i guess them having more information is good."},
	{text: "How does it work?"},
	{type:"received", audio:"pingin", text: "It sounds like you want to know how the data sharing works"},
	{type:"received", text: "I will analyse our conversation and present it in a condensed format"},
	{type:"received", text: "Everything will be in your own words"},
	{type:"received", text: "And it will help to find the best specialist"},
	{type:"received", next: 89, text: "Would you like to proceed with booking an appointment?"},
	{audio:"pingout", text: "How does that help?"},
	{type:"received", audio:"pingin", text: "Your specialist will know more about you before the appointment"},
	{type:"received", text: "And it will help to find the best specialist"},
	{type:"received", text: "So they can understand you more fully"},
	{type:"received", text: "Would you like to proceed with booking an appointment?"},
	{choice: 90, pause: true, text: "Ok"},
	{audio:"pingout", text: "Ok"},
	{text: "Sounds good"},
	{type:"received", audio:"pingin", text: "Great!"},
	{type:"received", pause: true, text: "I will need to ask you a few more questions then..."},
]