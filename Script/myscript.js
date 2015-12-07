var myApp = angular.module("myModule" ,[]);

var myController = function($scope){

    var employees=[
        {firstName:"Abhijit",lastName:"Galphat",gender:"Male",salary:"55000"},
        {firstName:"Amol",lastName:"pawal",gender:"Male",salary:"69000"},
        {firstName:"Nilesh",lastName:"xyz",gender:"Male",salary:"56000"},
        {firstName:"Maduri",lastName:"Dixit",gender:"Female",salary:"85000"},
        {firstName:"Rohit",lastName:"Sharma",gender:"Male",salary:"99000"},
        {firstName:"Priyanka",lastName:"Chopra",gender:"Female",salary:"99900"}
    ];

    $scope.employees=employees;
    
     
    $scope.search=function(item){
        if($scope.searchText == undefined){
            return true;
        }
        else{
            if(item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
              item.lastName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ){
                return true;
            }
        }
        return false;
    }
};
myApp.controller("myController",myController);