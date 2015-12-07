var myApp = angular.module("myModule" ,[]).filter("gender",function(){
    
    return function(gender){
       switch(gender){
            case 10 : 
                return "Male";
            case 20:
                return "female";
           default:
               return "***";
               
        }
    }
});

var myController = function($scope){

    var employees=[
        {firstName:"Abhijit",lastName:"Galphat",gender:10,salary:"55000"},
        {firstName:"Amol",lastName:"pawal",gender:10,salary:"69000"},
        {firstName:"Nilesh",lastName:"xyz",gender:10,salary:"56000"},
        {firstName:"Maduri",lastName:"Dixit",gender:20,salary:"85000"},
        {firstName:"Rohit",lastName:"Sharma",gender:10,salary:"99000"},
        {firstName:"Priyanka",lastName:"Chopra",gender:20,salary:"99900"}
    ];

    $scope.employees=employees;
    
     
   
};
myApp.controller("myController",myController);
