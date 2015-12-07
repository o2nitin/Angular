var myApp = angular.module("myModule" ,[]);

var myController = function($scope){
    var country=[{ 
        name:"India",
                capital:"New Delhi",
        cities:[
            
            {
                name:"Hyderabad"
            },
            {
                name:"Pune"
            },
            {
                name:"Mumbai"
            }
        ]},
                 
                 {name:"USA",
                capital:"Washington D.C",
        cities:[
            
            {
                name:"New York"
            },
            {
                name:"Dallas"
            },
            {
                name:"Las Vegas"
            }
        ]
            },
     
                 {name:"UK",
                capital:"London",
        cities:[
            
            {
                name:"Menchester"
            },
            {
                name:"cardiff"
            },
            {
                name:"Edinburgh"
            }
        ]
}];
    var employees=[
        {firstName:"Abhijit",lastName:"Galphat",gender:"Male",salary:"55000"},
        {firstName:"Amol",lastName:"pawal",gender:"Male",salary:"69000"},
        {firstName:"Nilesh",lastName:"xyz",gender:"Male",salary:"56000"},
        {firstName:"Maduri",lastName:"Dixit",gender:"Female",salary:"85000"}
    ];
    $scope.country=country;
    $scope.employees=employees;
    $scope.message="1st Text Displayed by Angular JS";
    $scope.sortColumn="firstName";
};
myApp.controller("myController",myController);