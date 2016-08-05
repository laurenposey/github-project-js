var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#git-user').submit(function(event) {
    event.preventDefault();
    var gitUser = $('#git-user-input').val();

  });
});
