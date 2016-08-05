var apiKey = require('./../.env').apiKey;

function Git() {

}

Git.prototype.exports.getRepos = function(gitUser){
  $.get('https://api.github.com/users/' + gitUser + apiKey).then(function(response){
    $("#output").prepend(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
