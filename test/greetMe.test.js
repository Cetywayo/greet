describe('greet the name with the selected language', function(){
    let greetNames = greetMe();

   it('should  greet the name on textbox with the selected language', function(){
   let greetNames = greetMe();
   greetNames.enterTheName('language, name');
   assert.equal(siwe, greetNames.enterTheName());
       
   });

  

  
});
