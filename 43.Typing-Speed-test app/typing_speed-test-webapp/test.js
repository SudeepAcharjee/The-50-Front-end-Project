
var timer = document.getElementById("timer");
var timeRemaining = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;


var calculateScore = function() {
	var paraSubmitted = textArea.value;
	var submittedWords = paraSubmitted.split(" ");
	var wordCount = submittedWords.length; 

	var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);

	return wordCount;
};


var generatePassage = function(){
	
	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
	var passages = [passage1, passage2, passage3, passage4, passage5];
	testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];

};

var displayTime = function () {

	var getTime = setInterval(function() {
		timeRemaining--;
		timer.innerHTML = "Time Remaining: " + timeRemaining + "s"; 

		console.log(timeRemaining);

		if(timeRemaining == 0){

			clearInterval(getTime);
			
			var wrapper = document.getElementById("wrapper");
			wrapper.remove();

			timer.remove();

			document.body.appendChild(newTestWindow);
			document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " words per minute.";
			newTestWindow.style.display = "block";
		} 
	}, 1000);

	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {
	
	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	generatePassage();

};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});

var passage1 = "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.<br><br>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.<br><br>But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.<br><br>Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.<br><br>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.<br><br>But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.";

var passage2 = "Fans, for the past two weeks you have been reading about a bad break. Yet today I consider myself the luckiest man on the face of the Earth. I have been in ballparks for seventeen years and have never received anything but kindness and encouragement from you fans.<br><br>Look at these grand men. Which of you wouldn't consider it the highlight of his career just to associate with them for even one day? Sure, I'm lucky. Who wouldn't consider it an honor to have known Jacob Ruppert? Also, the builder of baseball's greatest empire, Ed Barrow? To have spent six years with that wonderful little fellow, Miller Huggins? Then to have spent the next nine years with that outstanding leader, that smart student of psychology, the best manager in baseball today, Joe McCarthy? Sure, I'm lucky.<br><br>When the New York Giants, a team you would give your right arm to beat, and vice versa, sends you a gift - that's something. When everybody down to the groundskeepers and those boys in white coats remember you with trophies — that's something. When you have a wonderful mother-in-law who takes sides with you in squabbles with her own daughter — that's something. When you have a father and a mother who work all their lives so you can have an education and build your body — it's a blessing. When you have a wife who has been a tower of strength and shown more courage than you dreamed existed - that's the finest I know.<br><br>So I close in saying that I might have been given a bad break, but I've got an awful lot to live for.";

var passage3 = "You ain’t gonna believe this, but you used to fit right here. I’d hold you up to say to your mother, ‘This kid’s gonna be the best kid in the world. This kid’s gonna be somebody better than anybody I ever knew.’ And you grew up good and wonderful. It was great just watchin’ you, every day was like a privilege. Then the time come for you to be your own man and take on the world, and you did. But somewhere along the line, you changed. You stopped being you. You let people stick a finger in your face and tell you you’re no good. And when things got hard, you started lookin’ for something to blame, like a big shadow.<br><br>Let me tell you something you already know.The world ain’t all sunshine and rainbows. It’s a very mean and nasty place, and I don’t care how tough you are, it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit, it’s about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!<br><br>Now if you know what you’re worth, then go out and get what you’re worth! But you gotta be willing to take the hits. And not pointing fingers saying you ain’t where you wanna be because of him, or her, or anybody! Cowards do that and that ain’t you! You’re better than that!<br><br>I’m always gonna love you no matter what. No matter what happens. You’re my son and you’re my blood. You’re the best thing in my life. But until you start believing in yourself, you ain’t gonna have a life.";

passage4 = "Mr. Simms doesn't want it. He desn't need to labeled, 'Still worthy of being a Baird man'. What the hell is that? What is your motto here? 'Boys, inform on your classmates, save your hide. Anything short of that, we're gonna burn you at the stake'? Well, gentlemen, when the shit hits the fan, some guys run and some guys stay. Here's Charlie facing the fire and there's George hiding in Big Daddy's pocket. And what are you doing? You're gonna reward George and destroy Charlie.<br><br>Are you finished, Mr. Slade?<br><br>No, I'm just gettin' warmed up. I don't know who went to this place, William Howard Taft, William Jennings Bryan, William Tell, whoever. Their spirit is dead, if they ever had one. It's gone. You're building a rat ship here. A vessel for seagoing snitches, and if you think you're preparing these minnows for manhood, you better think again, because I say you are killing the very spirit this institution proclaims it instills. What a sham. What kind of a show you guys are putting on here today? I mean, the only class in this act is sitting next to me, and I'm here to tell ya this boy's soul is intact. It's non-negotiable. You know how I know? Someone here, and I'm not gonna say who, offered to buy it. Only Charlie here wasn't selling.<br><br>Sir, you're out of order.<br><br>Out of order. I'll show YOU 'out of order'! You don't know what 'out of order' is, Mr. Trask. I'd show you, but I'm too old, I'm too tired, I'm too fucking blind. If I were the man I was five years ago, I'd take a...FLAMETHROWER to this place! <br><br>Out of order? Who the hell do ya think you're talking to? I've been around, ya know? There was a time I could see. And I have seen. Boys like these, younger than these. Their arms torn out, their legs ripped off. But there is nothing like the sight of an amputated spirit. There's no prostetic for that. You think you're merely sending this splendid foot solder back home to Oregon with tail between his legs, but I say you are executing his SOUL! And why? Because he's not a Baird man. Baird men. You hurt this boy, you're gonna be Baird bums, the lot of ya. And Harry, Jimmy, Trent, wherever you are, fuck you too!<br><br>Stand down, Mr. Slade!<br><br>I'm not finished! As I came in here, I heard those words, 'Cradle of Leadership'. Well, when the bough breaks, the cradle will fall. And it has fallen here. It has fallen. Makers of men, Creators of leaders. Be careful what kind of leaders you're producing here. I don't know if Charlie's silence here today is right or wrong. I'm not a judge or jury, but I can tell you this: He won't sell anybody out to buy his future! And that, my friends, is called integrity. That's called courage. Now that's the stuff leaders should be made of. Now I have come to the crossroads in my life. I always knew what the right path was. Without exception, I knew. But I never took it. You know why? It was too damn hard. Now here's Charlie. He's come to the crossroads. He has chosen a path. It's the right path. It's a path made of principle that leads to character. Let him continue on his journey. You hold this boy's future in your hands, committee. It's a valuable future. Believe me. Don't destroy it. Protect it. Embrace it. It's gonna make you proud one day, I promise you.";

passage5 = "Consider yourself in Contempt!<br><br>Colonel Jessep, did you order the Code Red?<br><br>You don't have to answer that question!<br><br>I'll answer the question!<br><br>You want answers?<br><br>I think I'm entitled to.<br><br>You want answers?<br><br>I want the truth!<br><br>You can't handle the truth!<br><br>Son, we live in a world that has walls, and those walls have to be guarded by men with guns. Who's gonna do it? You? You, Lt. Weinburg? I have a greater responsibility than you could possibly fathom. You weep for Santiago, and you curse the Marines. You have that luxury. You have the luxury of not knowing what I know. That Santiago's death, while tragic, probably saved lives. And my existence, while grotesque and incomprehensible to you, saves lives. You don't want the truth because deep down in places you don't talk about at parties, you want me on that wall, you need me on that wall. We use words like honor, code, loyalty. We use these words as the backbone of a life spent defending something. You use them as a punchline. I have neither the time nor the inclination to explain myself to a man who rises and sleeps under the blanket of the very freedom that I provide, and then questions the manner in which I provide it. I would rather you just said thank you, and went on your way, Otherwise, I suggest you pick up a weapon, and stand a post. Either way, I don't give a damn what you think you are entitled to.<br><br>Did you order the Code Red?<br><br>I did the job.<br><br>Did you order the Code Red?<br><br>You're Goddamn right I did!";
