module.exports = {
 name: "autoplay",
code:`
$onlyIf[$voiceId==$voiceId[$clientId];You're not in the same voice channel!]
$endif
$autoPlay[youtube]

Now Activated Autoplay!


**This will autoplay video from YouTube/Spotify/SoundCloud And Automatically Adds A Music From The Queue**

**Current Mode:$message
**

$onlyIf[$voiceId!=;You must be in a voice channel to do that!]

$onlyIf[$hasPlayer==true;Theres No Music Currently Playing!]

`

