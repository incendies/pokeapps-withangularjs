angular.module('pokemonApp', [])
.controller('PokemonController', function($scope) {
  $scope.pokemons = [];
  $scope.selectedPokemon = [];
  $scope.popup = false;

  $.get('data.json', function(data){
    $scope.pokemons = data.pokemons;
    $scope.$apply();
  });

  $scope.openPopup = function(item){
    $scope.selectedPokemon = item;
    $scope.popup = true;
  }

  $scope.closePopup = function(){
    $scope.popup = false;
  }
});