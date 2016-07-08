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

.controller('MeatCtrl', function($scope) {
    
})

.controller('VegetableCtrl', function($scope,$state) { 
    // $scope.OpenVegetableAPage()=function(){
    //     $state.go('tab.vegetable')
    // }
    // $scope.OpenVegetableBPage()=function(){
    //     $state.go('tab.vegetable.b');
    // }
    // $scope.OpenVegetableCPage()=function(){
    //     $state.go('vegetable.c');
    // }
    // $scope.OpenVegetableDPage()=function(){
    //     $state.go('vegetable.d');
    // }
    // $scope.OpenVegetableEPage()=function(){
    //     $state.go('vegetable.e');
    // }
    // $scope.OpenVegetableFPage()=function(){
    //     $state.go('vegetable.f');
    // }
    // $scope.OpenVegetableGPage()=function(){
    //     $state.go('vegetable.g');
    // }
    // $scope.OpenVegetableHPage()=function(){
    //     $state.go('vegetable.h');
    // }
    // $scope.OpenVegetableIPage()=function(){
    //     $state.go('vegetable.i');
    // }
    // $scope.OpenVegetableJPage()=function(){
    //     $state.go('vegetable.j');
    // }
    // $scope.OpenVegetableKPage()=function(){
    //     $state.go('vegetable.k');
    // }
    // $scope.OpenVegetableLPage()=function(){
    //     $state.go('vegetable.l');
    // }
    // $scope.OpenVegetableMPage()=function(){
    //     $state.go('vegetable.m');
    // }
    // $scope.OpenVegetableNPage()=function(){
    //     $state.go('vegetable.n');
    // }
    // $scope.OpenVegetableOPage()=function(){
    //     $state.go('vegetable.o');
    // }
    // $scope.OpenVegetablePPage()=function(){
    //     $state.go('vegetable.p');
    // }
    // $scope.OpenVegetableQPage()=function(){
    //     $state.go('vegetable.q');
    // }
    // $scope.OpenVegetableRPage()=function(){
    //     $state.go('vegetable.r');
    // }
    // $scope.OpenVegetableSPage()=function(){
    //     $state.go('vegetable.s');
    // }
    // $scope.OpenVegetableTPage()=function(){
    //     $state.go('vegetable.t');
    // }
    // $scope.OpenVegetableUPage()=function(){
    //     $state.go('vegetable.u');
    // }
    // $scope.OpenVegetableVPage()=function(){
    //     $state.go('vegetable.v');
    // }
    // $scope.OpenVegetableWPage()=function(){
    //     $state.go('vegetable.w');
    // }
    // $scope.OpenVegetableXPage()=function(){
    //     $state.go('vegetable.x');
    // }
    // $scope.OpenVegetableYPage()=function(){
    //     $state.go('vegetable.y');
    // }
    // $scope.OpenVegetableZPage()=function(){
    //     $state.go('vegetable.z');
    // }
  })

.controller('RecipeCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('RecipeDetailCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('IngredientCtrl', function($scope) {
  
})

;
