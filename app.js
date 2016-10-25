//define the application and pull in ngRoute and ngAnimate

var austinApp = angular.module('austinApp', ['ngRoute', 'ngAnimate']);

//ROUTING ==============================
//set our routing for this application
//each route will pull in a different controller

austinApp.config(function ($routeProvider){


  $routeProvider

  //home page

  .when('/', {
    templateUrl: 'index.html',
    controller: 'mainController'
  })

  //about page
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'aboutController'
  })

  //contact page
  .when('/conact', {
    templateUrl: 'contact.html',
    controller: 'contactController'
  });
});

//CONTROLLERS ====================

//home page controller
austinApp.controller('mainController',
function($scope){
  $scope.pageClass = 'home';
});

//about page controller
austinApp.controller('aboutController',
function($scope){
  $scope.pageClass = 'about';
});

//contact page controller
austinApp.controller('contactController',
function($scope){
  $scope.pageClass = 'contact';
});
