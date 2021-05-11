describe('greet the name with the selected language', function(){
    let greetNames = greetMe();

   it('should  greet the name on text box with the selected language', function(){
   let greetNames = greetMe();
  
   assert.equal('Molo, Siwe', greetNames.enterTheName('isixhosa', 'Siwe');
       
   });

   it('should  returns the total bill for  calls', function(){
    let settingsBill = textBill();
    settingsBill.enterTextBill('call');
    assert.equal(2.75, settingsBill.getTot());
        
    });
 

  
});

