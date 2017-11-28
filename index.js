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

function displayRepositories(response){
  return response.repos.map(repo =>
    `<div>
        <h2><a href="${repo.html_url}">${repo.name}</a></h2>
        <p>${repo.description}</p>
        <img src="${repo.owner.avatar_url}" alt="${repo.owner.login}">
        <a href="${repo.owner.html_url}">${repo.owner.login}</a>
        <p><a href="#" data-repository="${repo.name}" data-owner="${repo.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      </div>`)
};
