var apiKey = require('./../.env').apiKey;
var Git = require('./../js/github.js').gitModule;

$(document).ready(function() {
  $('form#git-user').submit(function(event) {
    event.preventDefault();
    var gitUser = $('#git-user-input').val();

  });
});
