myApp.filter("gender",function(){
    
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
})