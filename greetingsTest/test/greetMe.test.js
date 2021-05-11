describe('greet the name with the selected language', function(){
    let greetNames = greetMe();

   it('should  greet the name on textbox with the selected language', function(){
   greetNames = greetMe();
   greetNames.enterTheName('siwe');
   assert.equal(Hello, greetNames.enterTheName());
       
   });

  

  
});

