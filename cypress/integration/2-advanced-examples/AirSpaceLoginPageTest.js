describe('AirSpaceLoginPageTestSuite', function()
{
    it('Verify Title of the Login page - Positive', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.title().should('eq','The Internet')
    }
    )
    it('Verify username and password is correct', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/secure')
        cy.contains('You logged into a secure area!')
    }
    )
    it('Verify invalid credentials - Incorrect username', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('Joesmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.contains('Your username is invalid!')
    }
    )
    it('Verify invalid credentials - Incorrect password', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!123')
        cy.get('.fa').click()
        cy.contains('Your password is invalid!')
    }
    )
    it('Verify invalid credentials - Incorrect username and password', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('joesmith')
        cy.get('#password').type('SuperSecretPassword!123')
        cy.get('.fa').click()
        cy.contains('Your username is invalid!')
    }
    )
    it('Verify username is mandatory', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type(' ')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.contains('Your username is invalid!')
    }
    )
    it('Verify password is mandatory', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type(' ')
        cy.get('.fa').click()
        cy.contains('Your password is invalid!')
    }
    )
    it('Verify logout', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/secure')
        cy.contains('You logged into a secure area!')
        cy.get('.button').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/login')
        cy.contains('You logged out of the secure area!')

    }
    )
    it('Test SQL injection', function()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('joesmith OR 1=1')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.contains('Your username is invalid!')
    }
    )

}
)
