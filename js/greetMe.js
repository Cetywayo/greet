var enterNameElem = document.querySelector('.greetSomeone')
var langItemElement = document.querySelector('.languageRadioBtn')
var clickGreetElementBn = document.querySelector('.enterBtn')
var messageElemnt = document.querySelector('.message')
var countTotalNamesGreetedElement = document.querySelector('.totalGreeted')
var displayGreetedNamesElement= document.querySelector('.displayNames')
var displayNamesElement = document.querySelector('.displayNamesBtn')
var resetBtnElement = document.querySelector('.reset')
var error = document.getElementById("error")
var displayElementNames = document.getElementById("greetedNames")
 var creetedNamesStorage;

// geting the names in the local storage
if(localStorage['names']){
creetedNamesStorage = JSON.parse(localStorage.getItem('names'));
} 

var factoryInstanceGreetName = greetMe(creetedNamesStorage);
factoryInstanceGreetName.displayNamesGreeted();
 
function sayHi(){
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    
  if(enterNameElem.value === "" && ! checkedRadioBtn)  {
    error.textContent = "Please enter a name and select the language"
    error.style.color= "red"  // Changing content and color of content
    setTimeout(function(){
      error.innerHTML =error.textContent ='' ;
    }, 2000)
  }
    else if(enterNameElem.value === "")  {
      error.textContent = "Please enter a name "
      error.style.color= "red"  // Changing content and color of content
      setTimeout(function(){
        error.innerHTML =error.textContent ='' ;
      }, 1900)
    }

    else if (!checkedRadioBtn)  {
            error.textContent = "Please choose language"
            error.style.color= "red"  // Changing content and color of content
            setTimeout(function(){
              error.innerHTML =error.textContent ='' ;
            }, 1900)
    }
     
    
   
else{

    factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value)
    factoryInstanceGreetName.countGreetedNames(enterNameElem.value)
    //factoryInstanceGreetName.displayNamesGreeted(enterNameElem.value)
     messageElemnt.innerHTML = factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value);
    //displayElementNames.innerHTML = factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value);
    
    localStorage.setItem("names", JSON.stringify(factoryInstanceGreetName.displayNamesGreeted()));

    enterNameElem.value= '';
    checkedRadioBtn.checked = false;

    //document.getElementsByClassName('.languageRadioBtn').checked = "false";
    countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();
    //displayNamesElement.innerHTML = factoryInstanceGreetName.displayNames();
    
   
    }
    
  } 
     countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();

     function resetStorage(){
        localStorage.clear()
        location.reload()
      }

      function displayNames(){
        //console.log (localStorage);
        displayElementNames.innerHTML = factoryInstanceGreetName.displayNamesGreeted()
       
      }
     

    clickGreetElementBn.addEventListener('click',sayHi )
    displayNamesElement.addEventListener('click',displayNames )
    resetBtnElement.addEventListener('click',resetStorage )



  