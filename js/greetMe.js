var enterNameElem = document.querySelector('.greetSomeone')
var langItemElement = document.querySelector('.languageRadioBtn')
var clickGreetElementBn = document.querySelector('.enterBtn')
var messageElemnt = document.querySelector('.message')
var countTotalNamesGreetedElement = document.querySelector('.totalGreeted')
var displayGreetedNamesElement= document.querySelector('.displayNames')
var resetBtnElement = document.querySelector('.reset')
 var creetedNamesStorage;

// geting the names in the local storage
if(localStorage['names']){
creetedNamesStorage = JSON.parse(localStorage.getItem('names'));
} 

var factoryInstanceGreetName = greetMe(creetedNamesStorage);
 
function sayHi(){

   // alert(langItemElement.value);
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
   // if(checkedRadioBtn){
       //var checkedRadio= langItemElement.value
       //alert(checkedRadio)
   // }
    factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value)
    factoryInstanceGreetName.countGreetedNames(enterNameElem.value)
    factoryInstanceGreetName.displayNamesGreeted(enterNameElem.value)
    //factoryInstanceGreetName.keepNamesOnScreen()
    //factoryInstanceGreetName.displayNoOfGreetedOnScreen(enterNameElem.value)

    messageElemnt.innerHTML = factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value);
    localStorage.setItem("names", JSON.stringify(factoryInstanceGreetName.displayNamesGreeted()));

    enterNameElem.value= '';
    countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();
    displayGreetedNamesElement.innerHTML = factoryInstanceGreetName.displayNamesGreeted();
    console.log(factoryInstanceGreetName.countGreetedNames());
   // ('.message').fadeOut('fast');
    //$(window).click(function(){$('.messages.status').fadeOut();});
    //console.log (countTheNames);
   //countNames.push(document.getElementsByClassName("greetSomeone".value));
   //document.getElementById("").innerHTML = countNames[0];        

    }
    
    
     countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName.getCount();

    //  function resetStorage(){
    //     return  localStorage.clear()
  
    //   }

    //factoryInstanceGreetName.resetStorage()

    clickGreetElementBn.addEventListener('click',sayHi )
    //resetBtnElement.addEventListener('click',resetStorage )

