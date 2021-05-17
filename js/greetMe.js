var enterNameElem = document.querySelector('.greetSomeone')
var langItemElement = document.querySelector('.languageRadioBtn')
var clickGreetElementBn = document.querySelector('.enterBtn')
var messageElemnt = document.querySelector('.message')
var countTotalNamesGreetedElement = document.querySelector('.totalGreeted')
var displayGreetedNamesElement= document.querySelector('.displayNames')
var resetBtnElement = document.querySelector('.reset')
var error = document.getElementById("error")
 var creetedNamesStorage;

// geting the names in the local storage
if(localStorage['names']){
creetedNamesStorage = JSON.parse(localStorage.getItem('names'));
} 

var factoryInstanceGreetName = greetMe(creetedNamesStorage);
 
function sayHi(){
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    
  if(enterNameElem.value === "" && ! checkedRadioBtn)  {
    error.textContent = "Please enter a name and select the language"
    error.style.color= "red"  // Changing content and color of content
    setTimeout(function(){
      error.textContent =''
    }, 1900)
  }
    else if(enterNameElem.value === "")  {
      error.textContent = "Please enter a name "
      error.style.color= "red"  // Changing content and color of content
      setTimeout(function(){
        error.textContent =''
      }, 1500)
    }

    else if (!checkedRadioBtn)  {
            error.textContent = "Please choose language"
            error.style.color= "red"  // Changing content and color of content
            setTimeout(function(){
            error.textContent =''
            }, 1500)
    }
     
    
   
else{

    factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value)
    factoryInstanceGreetName.countGreetedNames(enterNameElem.value)
    factoryInstanceGreetName.displayNamesGreeted(enterNameElem.value)
    messageElemnt.innerHTML = factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value);
    localStorage.setItem("names", JSON.stringify(factoryInstanceGreetName.displayNamesGreeted()));

    enterNameElem.value= '';
    countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();
    displayGreetedNamesElement.innerHTML = factoryInstanceGreetName.displayNamesGreeted();
   
    }
    
  } 
     countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();

     function resetStorage(){
        localStorage.clear()
        location.reload()
      }

    clickGreetElementBn.addEventListener('click',sayHi )
    resetBtnElement.addEventListener('click',resetStorage )



  