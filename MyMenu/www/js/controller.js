angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope,$state) {
      $scope.OpenVegetablePage=function(){
          $state.go('tab.vegetable')
      }

      $scope.OpenMeatPage=function(){
          $state.go('tab.meat')
      }

      $scope.OpenIngredientPage=function(){
          $state.go('tab.ingredient')
      }     
})

.controller('MeatCtrl', function($scope) {})

.controller('VegetableCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
            $scope.name="Vannara";

  })

.controller('RecipeCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('RecipeDetailCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('IngredientCtrl', function($scope) {
  
});