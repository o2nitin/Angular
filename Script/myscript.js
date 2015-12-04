var myApp = angular.module("myModule" ,[]);

var myController = function($scope){
    var country={ 
        name:"India",
                capital:"New Delhi",
                flag:"/Images/indian-flag.png"};
    $scope.country=country;
    $scope.message="1st Text Displayed by Angular JS";
};
myApp.controller("myController",myController);