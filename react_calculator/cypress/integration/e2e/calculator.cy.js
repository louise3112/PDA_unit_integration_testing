describe("Calculator", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('should have working number buttons', () => {
        cy.get('#number2').click()
        cy.get('.display').should('contain', '2')
    })

    // 1. Do the number buttons update the display of the running total?
    it('should update the display with concatenated numbers', () => {
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="number2"]').click()
        cy.get('.display').should('contain', '22')
    })

    // 2. Do the arithmetical operations update the display with the result of the operation?
    it('should be able to add numbers', () => {
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-add"]').click()
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '7')        
    })

    it('should be able to subtract numbers', () => {
        cy.get('[data-testid="number7"]').click()
        cy.get('[data-testid="operator-subtract"]').click()
        cy.get('[data-testid="number3"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '4')        
    })

    it('should be able to multiply numbers', () => {
        cy.get('[data-testid="number6"]').click()
        cy.get('[data-testid="operator-multiply"]').click()
        cy.get('[data-testid="number3"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '18')        
    })

    it('should be able to divide numbers', () => {
        cy.get('[data-testid="number8"]').click()
        cy.get('[data-testid="operator-divide"]').click()
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '4')        
    })

    // 3. Can multiple operations be chained together?
    it('should be able to chain multiple operations together', () => {
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-add"]').click()
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-multiply"]').click()
        cy.get('[data-testid="number3"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '21')        
    })

    // 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
    it('should be able to display positive numbers', () => {
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-add"]').click()
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '7')        
    })

    it('should be able to display negative numbers', () => {
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-subtract"]').click()
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '-3')        
    })

    it('should be able to display decimal numbers', () => {
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-divide"]').click()
        cy.get('[data-testid="number2"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '2.5')        
    })

    it('should be able to display very large numbers', () => {
        cy.get('[data-testid="number1"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="operator-multiply"]').click()
        cy.get('[data-testid="number1"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', '1000000')        
    })

    // 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
    it('should be able to display an error message when dividing by zero', () => {
        cy.get('[data-testid="number5"]').click()
        cy.get('[data-testid="operator-divide"]').click()
        cy.get('[data-testid="number0"]').click()
        cy.get('[data-testid="operator-equals"]').click()
        cy.get('.display').should('contain', "Error: Can't divide by 0")        
    })

})

