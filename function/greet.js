function greetMe(existingNames) {

    var countNames = existingNames || [];
    var letters = /^[A-Za-z]+$/;
   
//
    function enterTheName(chooseLanguage, name) {
         
        if (chooseLanguage === "isixhosa" && name.trim().match(letters)) { 
            return "Molo, " + name;
          
        }
        else if (chooseLanguage === "english" && name.trim().match(letters)) {
            return "Hello, " + name;
        }
        else if (chooseLanguage === "afrikaans" && name.trim().match(letters)) {
            return "Hallo, " + name;
        }
        else {
            return("Enter alphabet only");

        } 

    }

    function countGreetedNames(strName) {
       var name = strName.charAt(0).toUpperCase() + strName.slice(1).toLowerCase()
        if (name) {
            //
            if (!countNames.includes(name) && name.trim().match(letters)) {

                countNames.push(name);  //countNames["xxx","dddd","dddd","ccc","ddd"]

            }

            
        }
    }

    function getCount() {
        // count the greeted names inside the array
        return countNames.length;
    }

    function displayNamesGreeted() {
        return countNames;
    }
    

    return {
        enterTheName,
        countGreetedNames,
        getCount,
        displayNamesGreeted,
     
        
    }
}