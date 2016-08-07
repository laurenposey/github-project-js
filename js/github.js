var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.getRepos = function(gitUser){
  var that = this;
  $.get('https://api.github.com/users/' + gitUser + '/repos').then(function(response){
    console.log(response);
    var htmlOutput = "<p class='pretty'>Current GitUser:" + gitUser + "</p>";
    for (var i = 0; i < response.length; i++) {
      if (response[i].description === null || response[i].description === "") {
        response[i].description = "No description";
      }
      htmlOutput += "<p class='pretty'>" + response[i].name + "</p><p class='pretty'>" + response[i].description + "</p><br>";
    }
    $("#output").html(htmlOutput);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
