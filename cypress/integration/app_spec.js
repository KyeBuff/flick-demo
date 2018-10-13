describe('App Component', function() {
  	it('Succesfully loads', function() {
		cy.visit('/');
	})

	it('Renders the phone case', function() {
	  	cy.visit('/');
    	cy.get('.case');
  	})
})

