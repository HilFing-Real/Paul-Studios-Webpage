<!-- Original: Michael Tartaglia <stonedstan@hotmail.com> -->
<!-- Web Site:  http://www.geocities.com/SiliconValley/Horizon/5235 -->



<!-- Begin
msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
"A new computer is sold in the US every hour!",
"When do birds migrate from North to South?",
"Perplexing phrases, like this one, are tougher to type.")
word = 10
function m() {
msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
"A new computer is sold in the US every hour!",
"When do birds migrate from North to South?",
"Perplexing phrases, like this one, are tough to type.")
word = 10
}
function e() {
msg = new Array("If you can correctly, and quickly, type this perplexing sentence, you are one superb typist!",
"You are one superb typist if you can correctly, and quickly, type this long phrase.",
"I believe you're a good typist, so I believe you will correctly copy this statement!",
"Because this is not a fairly simple phrase, could you swiftly, and precisely, copy it?")
word = 15
}
function s() {
msg = new Array("Computers are the medium of the future.",
"Can you type this phrase rather quickly?",
"Who is the President of the US?",
"I believe that you can type well!")
word = 7
}
function beginIt() {
randNum = Math.floor((Math.random() * 10)) % 4
msgType = msg[randNum]
day = new Date();
startType = day.getTime();
document.theForm.given.value = msgType
document.theForm.typed.focus();
document.theForm.typed.select();
}
function cheat() {
alert("You can not change that!");
document.theForm.typed.focus();
}
function stopIt() {
dayTwo = new Date();
endType = dayTwo.getTime();
totalTime = ((endType - startType) / 1000)
spd = Math.round((word/totalTime) * 60)
if (document.theForm.typed.value == document.theForm.given.value) {
alert("\nYou typed a " + word + " word sentence in "
+ totalTime + " seconds, a speed of about " + spd + " words per minute!")
}
else {
alert("You made an error, but typed at a speed of " + spd + " words per minute.")
   }
}
// End -->