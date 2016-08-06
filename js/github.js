var apiKey = require('./../.env').apiKey;

function Git() {

}

Git.prototype.getRepos = function(gitUser){
  $.get('https://api.github.com/users/' + gitUser + '/repos').then(function(response){
    console.log(response)
    // $("#output").html(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;
