function greetMe (){
//var name;
var countNames =0;

function countGreetedNames(){
 
    
}



function enterTheName (chooseLanguage,name){



    if (chooseLanguage=== "isixhosa")   {
        name ++
        return "Molo, "+ name;
        

    }

        else if (chooseLanguage === "english"){
            countNames += name;
            return "Hello, "+ name;

}

    else if (chooseLanguage === "afrikaans"){
        countNames += name;
        return "Hallo, "+ name;
        
     }



}
return{
    enterTheName,
    countGreetedNames
    
}
}