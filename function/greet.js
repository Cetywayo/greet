function greetMe(existingNames) {

    var countNames = existingNames || [];
    var letters = /^[A-Za-z]+$/;
   
//
    function enterTheName(chooseLanguage, name) {
         //strName =  name.trim();
      //
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
           
        //    alert ("input alphabet only")
        
           
        
        } 

    }

    function countGreetedNames(strName) {

        if (strName) {
            //
            if (!countNames.includes(strName) && strName.trim().match(letters)) {

                countNames.push(strName);  //countNames["xxx","dddd","dddd","ccc","ddd"]

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