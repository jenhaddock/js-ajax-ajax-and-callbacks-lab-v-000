$(document).ready(function (){
});

function displayError(){
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
};

function searchRepositories(){
  const searchTerms = document.getElementById('searchTerms').value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response){
    $('#results').html(displayRepositories(response))
  }).fail(displayError())
};
