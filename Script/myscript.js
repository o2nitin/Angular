var myApp= angular.module("myModule",[]);

var myController = function($scope){
    
    $scope.message="1st Text Displayed by Angular JS";
};
myApp.controller("myController",myController);