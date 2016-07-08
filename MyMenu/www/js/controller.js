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

.controller('VegetableCtrl', function($scope,$state, $stateParams) {
    console.log($stateParams.id); 
    switch ($stateParams.id){
        case "b": $("linkB").addClass("disabled");break;
        case "c": $("linkC").addClass("disabled");break;
        default: $("linkA").addClass("disabled");break;
    }
    var vegetables =[
        {
        groupId:'a',
        name:'artichoke',
        label : 'artichoke',
        imgUrl :'img/Vegetable/artichoke.jpg'        
        }
        ,{
        groupId:'a',
        name:'aubergine',
        label : 'aubergine',
        imgUrl :'img/Vegetable/aubergine.jpg'        
        }
        ,{
        groupId:'b',
        name:'beansprouts',
        label : 'bean sprouts',
        imgUrl :'img/Vegetable/bean-sprouts.jpg'        
        }
        ,{
        groupId:'b',
        name:'beetroot',
        label : 'beetroot',
        imgUrl :'img/Vegetable/beetroot.jpg'        
        }
        ,{
        groupId:'b',
        name:'bittermelon',
        label : 'bitter melon',
        imgUrl :'img/Vegetable/bitter melon.jpg'        
        }
        ,{
        groupId:'b',
        name:'bokchoy',
        label : 'bok choy',
        imgUrl :'img/Vegetable/Bok-Choy.jpg'        
        }
        ,{
        groupId:'b',
        name:'broadbeans',
        label : 'broad beans',
        imgUrl :'img/Vegetable/broad beans.jpg'        
        }
        ,{
        groupId:'b',
        name:'broccoli',
        label : 'broccoli',
        imgUrl :'img/Vegetable/broccoli.jpg'        
        }
        ,{
        groupId:'c',
        name:'cabbage',
        label : 'cabbage',
        imgUrl :'img/Vegetable/cabbage.jpg'        
        }
        ,{
        groupId:'c',
        name:'carrots',
        label : 'carrots',
        imgUrl :'img/Vegetable/carrots.jpg'        
        }
        ,{
        groupId:'c',
        name:'cauliflower',
        label : 'cauliflower',
        imgUrl :'img/Vegetable/cauliflower.jpg'        
        }
        ,{
        groupId:'c',
        name:'celeriac',
        label : 'celeriac',
        imgUrl :'img/Vegetable/celeriac.jpg'        
        }
        ,{
        groupId:'c',
        name:'celery',
        label : 'celery',
        imgUrl :'img/Vegetable/celery.jpg'        
        }
        ,{
        groupId:'c',
        name:'chilli',
        label : 'chilli',
        imgUrl :'img/Vegetable/Chilli.jpg'        
        }
        ,{
        groupId:'c',
        name:'chinesebroccoli',
        label : 'chinese broccoli',
        imgUrl :'img/Vegetable/chinese broccoli.jpg'        
        }
        ,{
        groupId:'c',
        name:'chinesecabbage',
        label : 'chinese cabbage',
        imgUrl :'img/Vegetable/chinese cabbage.jpg'        
        }
        ,{
        groupId:'c',
        name:'courgette',
        label : 'courgette',
        imgUrl :'img/Vegetable/courgette.jpg'        
        }
        ,{
        groupId:'c',
        name:'cucumber',
        label : 'cucumber',
        imgUrl :'img/Vegetable/cucumber.jpg'        
        }
        ,{
        groupId:'f',
        name:'fennel',
        label : 'fennel',
        imgUrl :'img/Vegetable/fennel.jpg'        
        }
        ,{
        groupId:'g',
        name:'greenbeans',
        label : 'green beans',
        imgUrl :'img/Vegetable/green beans.jpg'        
        }
        ,{
        groupId:'k',
        name:'Kholrabi',
        label : 'Kholrabi',
        imgUrl :'img/Vegetable/Kholrabi.jpg'        
        }
        ,{
        groupId:'l',
        name:'Leek',
        label : 'Leek',
        imgUrl :'img/Vegetable/Leek.jpg'        
        }
        ,{
        groupId:'m',
        name:'mangetout',
        label : 'mangetout',
        imgUrl :'img/Vegetable/mangetout.jpg'        
        }
        ,{
        groupId:'o',
        name:'onion',
        label : 'onion',
        imgUrl :'img/Vegetable/onion.jpg'        
        }
        ,{
        groupId:'p',
        name:'parsnip',
        label : 'parsnip',
        imgUrl :'img/Vegetable/parsnip.jpg'        
        }
        ,{
        groupId:'p',
        name:'peas',
        label : 'peas',
        imgUrl :'img/Vegetable/peas.jpg'        
        }
        ,{
        groupId:'p',
        name:'pepper',
        label : 'pepper',
        imgUrl :'img/Vegetable/pepper.jpg'        
        }
        ,{
        groupId:'p',
        name:'potato',
        label : 'potato',
        imgUrl :'img/Vegetable/potato.jpg'        
        }
        ,{
        groupId:'p',
        name:'pumkin',
        label : 'pumkin',
        imgUrl :'img/Vegetable/pumkin.jpg'        
        }
        ,{
        groupId:'r',
        name:'runnerbeans',
        label : 'runner beans',
        imgUrl :'img/Vegetable/runner beans.jpg'        
        }
        ,{
        groupId:'s',
        name:'shallot',
        label : 'shallot',
        imgUrl :'img/Vegetable/shallot.jpg'        
        }
        ,{
        groupId:'s',
        name:'spinach',
        label : 'spinach',
        imgUrl :'img/Vegetable/spinach.jpg'        
        }
        ,{
        groupId:'s',
        name:'spinach',
        label : 'spinach',
        imgUrl :'img/Vegetable/spinach.jpg'        
        }
        ,{
        groupId:'s',
        name:'springonion',
        label : 'spring onion',
        imgUrl :'img/Vegetable/spring-onion.jpg'        
        }
        ,{
        groupId:'s',
        name:'Swisschard',
        label : 'Swisschard',
        imgUrl :'img/Vegetable/Swisschard.jpg'        
        }
        ,{
        groupId:'t',
        name:'turnip',
        label : 'turnip',
        imgUrl :'img/Vegetable/turnip.jpg'        
        }        
    ];   
   
  })

.controller('RecipeCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('RecipeDetailCtrl', function($scope, $stateParams, Chats) {
  
})
.controller('IngredientCtrl', function($scope) {
  
})

;
