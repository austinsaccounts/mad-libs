

$(document).ready(function() {
  $("#formOne").submit (function(event) {

var blanks = ["adjective1", "adjective2", "bird", "room", "verb1", "verb2", "relative", "noun1", "liquid", "verb3", "bodyPart", "noun2", "verb4", "noun3" ]

blanks.forEach(function(blank) {
    var userInput = $("input#"+ blank).val();
    $("." + blank).text(userInput);
});

    $("#story").show();
    event.preventDefault();
  });
});
