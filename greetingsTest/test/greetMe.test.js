describe('greet the name with the selected language', function(){
    let greetNames = greetMe();

   it('should  greet the name in xhosa', function(){
   greetNames = greetMe();
  
   assert.equal('Molo, Siwe', greetNames.enterTheName('isixhosa','Siwe'));
       
   });

  
   it('should  greet the name in english', function(){
    greetNames = greetMe();
   
    assert.equal('Hello, Siwe', greetNames.enterTheName('english','Siwe'));
        
    });

    it('should  greet the name in afrikaans', function(){
        greetNames = greetMe();
       
        assert.equal('Hallo, Siwe', greetNames.enterTheName('afrikaans','Siwe'));
            
        });
      
        // it('should return list of greeted names', function(){
        //     greetNames = greetMe();

        //     greetNames.enterTheName('afrikaans','sino');
        //     greetNames.enterTheName('afrikaans','Siwe');
        //     assert.equal([], greetNames.displayNamesGreeted());
                
        //     });
  
});

