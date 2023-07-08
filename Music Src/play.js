module.exports = {
    name: "play",
    $if: "old",
    code: `
    $if[$hasPlayer!=true]
    $author[Now Playing;https://media.tenor.com/9xkXH3JNwxQAAAAM/digibyte-dgb.gif]
$title[Added,Now Playing...]
  $thumbnail[$songInfo[thumbnail]]
  $description[Title:[$songInfo[title]]($songInfo[url])
  Requester: $songInfo[requester]

  $addField[Duration;$splitText[2]:$splitText[3]
$textSplit[$digitalFormat[$parseTime[$songInfo[duration]]];:]
  ]

  $color[00ffff]
  $footer[Requested by $username]
$addtimestamp
$playTrack[$nonEscape[$message];youtube]
$onlyIf[$voiceID!=;You must enter the voice channel.]
$joinVC
$endif

  $addButton[1;⏸️ Pause;primary;pause;false]
  
    $addButton[1;▶️ Resume;primary;resume;false]

    $addButton[1;⏹️ Stop;danger;stop;false]

    $addButton[1;🎶 Now Playing;primary;nowplaying;false]
 
$djsEval[console.log("\\u001b\\[36m[LOG] $username Just Used Play Cmd!\\n \\n[LOG] Title Of Song:$message\\u001b\\[36m")]







$if[$hasPlayer!=false]
$author[Added In The Queue;https://media.tenor.com/9xkXH3JNwxQAAAAM/digibyte-dgb.gif]
$title[Queued]
$description[Added **$message** In  The Queue!]
$color[#00ffff]
$color[d8ffa1]
$playTrack[$nonEscape[$message];youtube]
$onlyIf[$voiceID!=;You must enter the voice channel.]
$onlyIf[$checkContains[$message[1];https://youtube.com/]==false||$checkContains[$message[1];https://youtu.be/]==true;Only youtube is supported]
$endif

    $onlyIf[$message!=;Please provide a title or a YouTube link To Play A Song!]


  `
  
}
