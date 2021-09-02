var messages = [{type: 'intro', text: "You are in the pub on Brown Street in Dundee with your friend, Alastair"}, {type: 'intro', text: "He was 20 minutes late as he was caught in a meeting about his startup"},
	{type: 'intro', text: "You are already halfway through your pint when he arrives"},
	{choice: 4, pause: true, text: "Al!"},
	{text: "Al!"},
	{text: "You must be busy! How's the startup going?"},
	{type: "received", text: "Ugh, slowly"},
	{text: "Oh how come?"},
	{text: "Long week?"},
	{type: "received", text: "Not really."},
	{type: "received", text: "I just heard today that my request for patient data got denied by the NHS."},
	{type: "received", text: "Without that data it's going to be impossible to get this thing to work."},
	{choice: 14, text: "What kind of data?"},
	{choice: 17, pause: true, text: "What does it do?"},
	{text: "Wait what kind of data were you asking for?"},
	{type: "received", text: "I am making a service for people with long term depression to help them manage their condition."},
	{type: "received", next: 21, text: "We want to know when they have panic attacks, what triggers them and to access data about how much exercise they do."},
	{text: "What were you going to do with the data?"},
	{type: "received", text: "I am making a service for people with long term depression to help them manage their condition."},
	{type: "received", text: "We want to know when they have panic attacks, what triggers them and to access data about how much exercise they do."},
	{type: "received", text: "Then we can try to predict their low moments and warn them in advance."},
	{choice: 23, text: "Isn't that confidential?"},
	{choice: 27, pause: true, text: "Do they have a choice?"},
	{text: "But isn't that data all confidential?"},
	{text: "The hospital aren't allowed to share that are they?"},
	{type: "received", text: "Yeah if a panel at the hospital approves it they can partner with organisations like mine."},
	{type: "received", next: 30, text: "We just have to prove that we are trying to do good research with it."},
	{text: "Wait but the patients get to choose if their data is shared right?"},
	{type: "received", text: "Well, not exactly…"},
	{type: "received", text: "They are informed that it is a possibility when they have their consultations but ultimately a panel at the hospital approves whether the data should be shared or not."},
	{choice: 32, text: "Can’t they decide for themselves?"},
	{choice: 39, pause: true, text: "I would want a choice"},
	{text: "I don’t know...maybe the hospital is right not to share it with you."},
	{text: "It's people’s private data and they should get to choose."},
	{text: "Can't you just ask everyone individually to opt in?"},
	{type: "received", text: "Not really…"},
	{type: "received", text: "People have tried before but not enough people do it and then don't get enough data to make something good."},
	{type: "received", text: "If we are going to make useful technology then we need a really big data set."},
	{choice: 46, next: 31 , text: "Why didn’t you get it then?"},
	{text: "To be honest I'd be pretty pissed if I knew folk at the hospital had shared personal data about me without even asking."},
	{text: "And then you use that to run algorithms on people to predict what we are going to do before they do it…"},
	{type: "received", text: "Well its not really like that."},
	{type: "received", text: "They sign up for the service if they want to use it."},
	{type: "received", text: "It really helps people to avoid depressive episodes."},
	{choice: 46 , text: "Why didn’t you get it then?"},
	{choice: 46, pause: true, text: "Fair enough"},
	{text: "Yeah ok, fair enough, I can see the benefits."},
	{text: "So did they say why they turned you down?"},
	{type: "received", text: "Yeah they only accept evidence from these huge randomised trials."},
 	{type: "received", text: "But we can't do a trial like that because they wont give us access to the data."},
 	{type: "received", text: "It's kinda chicken and egg."},
 	{choice: 53, text: "Good"},
	{choice: 55, pause: true, text: "Tricky"},
	{text: "That's a good thing"},
	{next: 58, text: "I don’t want a big tech company being able to get hold of my data."},
	{text: "Yeah that's really tricky"},
	{text: "I do value what you’re doing"},
	{text: "I just really don’t want a big tech company knowing everything about me"},
	{type: "received", text: "Yeah but I'm not a big tech company."},
	{type: "received", text: "I’m running this from a desk in an old factory round the corner"},
	{choice: 62 , text: "You’re ok"},
	{choice: 66, pause: true, text: "Not yet!"},
	{text: "That's true."},
	{text: "I guess I trust that a bit more. You having it I mean."},
	{text: "I still worry about the future though."},
	{next: 69, text: "The rules might be one way now but who knows how my data could be used in the future."},
	{text: "Now you’re not but who knows!"},
	{text: "I suppose I just worry about the future. "},
	{text: "Who knows who could get hold of my data or what they will use it for."},
	{text: "We could be ruled by an authoritarian government with Big Brother watching over us!"},
	{type: "received", text: "It seems unlikely"},
	{type: "received", text: "and there are definitely safeguards."},
	{type: "received", text: "But I guess you’re right in theory."},
	{type: "received", pause: true, text: "Who knows what could happen in the future."},
 	
]
