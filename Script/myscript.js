var myApp = angular.module("myModule" ,[]);

var myController = function($scope){
    var country={ 
        name:"India",
                capital:"New Delhi",
                flag:"/Images/indian-flag.png"};
    var employees=[
        {firstName:"Abhijit",lastName:"Galphat",gender:"Male",salary:"55000"},
        {firstName:"Amol",lastName:"pawal",gender:"Male",salary:"69000"},
        {firstName:"Nilesh",lastName:"xyz",gender:"Male",salary:"56000"},
        {firstName:"Maduri",lastName:"Dixit",gender:"Female",salary:"85000"}
    ];
    $scope.country=country;
    $scope.employees=employees;
    $scope.message="1st Text Displayed by Angular JS";
};
myApp.controller("myController",myController);