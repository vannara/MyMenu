angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  // (Home) :
    .state('tab.main', {
      url: '/main',
      views: {
        'tab-main': {
          controller: 'MainCtrl',
          templateUrl: 'templates/main.html'
        }
      }
    })

    .state('tab.vegetable', {
    url: '/vegetable/:id',
    views: {
      'tab-vegetable': {
        templateUrl: 'templates/vegetable.html',
        controller: 'VegetableCtrl'
       }
      }
    })

    .state('tab.meat', {
      url: '/meat',
      views: {
        'tab-meat': {
          templateUrl: 'templates/meat.html',
          controller: 'MeatCtrl'
        }
      }
    })
    .state('tab.ingredient', {
      url: '/ingredient',
      views: {
        'tab-ingredient': {
          templateUrl: 'templates/ingredient.html',
          controller: 'IngredientCtrl'
        }
      }
    })

    .state('recipe', {
      url: '/recipe/:recipeId',
      views: {
        'recipe': {
          templateUrl: 'templates/recipe.html',
          controller: 'RecipeCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise("/tab/main");    
});
