var myApp = angular.module("myModule" ,[]);

var myController = function($scope){

    var employees=[
        {firstName:"Abhijit",lastName:"Galphat",gender:"Male",salary:"55000"},
        {firstName:"Amol",lastName:"pawal",gender:"Male",salary:"69000"},
        {firstName:"Nilesh",lastName:"xyz",gender:"Male",salary:"56000"},
        {firstName:"Maduri",lastName:"Dixit",gender:"Female",salary:"85000"}
    ];

    $scope.employees=employees;
    $scope.message="1st Text Displayed by Angular JS";
    $scope.sortColumn="firstName";
    $scope.revSort=true;
    $scope.sortData= function(column){
        $scope.revSort=($scope.sortColumn==column) ? !$scope.revSort : false;
        $scope.sortColumn=column;
    }
    $scope.getSortClass=function(column){
        if($scope.sortColumn==column){
            return $scope.revSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
};
myApp.controller("myController",myController);