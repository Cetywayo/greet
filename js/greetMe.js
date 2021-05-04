var enterNameElem = document.querySelector('.greetSomeone')
var langItemElement = document.querySelector('.languageRadioBtn')
var clickGreetElementBn = document.querySelector('.enterBtn')
var messageElemnt = document.querySelector('.message')
var countTotalNamesGreetedElement = document.querySelector('.totalGreeted')

var name;

var factoryInstanceGreetName = greetMe();
 
function sayHi(){

   // alert(langItemElement.value);
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
   // if(checkedRadioBtn){
       //var checkedRadio= langItemElement.value
       //alert(checkedRadio)
   // }
    factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value)

    messageElemnt.innerHTML = factoryInstanceGreetName.enterTheName(checkedRadioBtn.value, enterNameElem.value);
    enterNameElem.value= '';
    countTotalNamesGreetedElement.innerHTML = factoryInstanceGreetName

    }
    
    



    clickGreetElementBn.addEventListener('click',sayHi )



