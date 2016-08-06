var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.getRepos = function(gitUser){
  var that = this;
  $.get('https://api.github.com/users/' + gitUser + '/repos').then(function(response){
    console.log(response)
    var htmlOutput = "<p>Current GitUser:" + gitUser + "</p>";
    for (var i = 0; i < response.length; i++) {
      htmlOutput += "<p>" + response[i].full_name + "</p><br><p>" + response[i].description || "No description" + "</p>";
    }
    $("#output").html(htmlOutput);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
