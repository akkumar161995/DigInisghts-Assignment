describe('Validate Upsiide specs ',()=>{

    it('verify if user enters “No” in Qualifier Question, he gets disqualified',()=>{
        const messageSummary = 'Your survey is complete and results have been submitted'

        cy.visit('')
        shouldBeDisabled('.basic-button',true)
        cy
            .get('.question-single-select > :nth-child(2)')
            .click()

        shouldBeDisabled('.basic-button',false)
        cy
            .get('.footer-helper .basic-button')
            .click()
        

        cy.intercept('DELETE','https://new-api.upsiide.com/responses/4548686', res => {
            expect(res.statusCode).to.eq(200);
            expect(res.body).to.deep.eq({ redirectUrl: null });
        });

        cy
            .contains('.authenticate-message','Thank you')
            .find('.authenticate-message__summary')
            .should('have.text',messageSummary)

    })
        it('Verify treade off cards appears if user likes any 2 ideas',()=>{

        cy.visit('')

        cy
            .get('.question-single-select > :nth-child(1)')
            .click()

        cy
            .get('.footer-helper .basic-button')
            .click()

            cy.get('.welcome-container__button > .basic-button').should('be.visible')
            cy.get('.welcome-container__button > .basic-button').click()

            cy.get('.card-view__button.accept').click()
            cy.get('.card-view__button.reject').click()
            cy.wait(1000)
            cy.get('.card-view__button.accept').click()
            cy.get('.commitment-card-stack .commitment-view-checkbox').should('have.length',2)



        })


    })

export function shouldBeDisabled(fieldTestTag,boolean,eq=0){
    cy.get((fieldTestTag)).eq(1).should(field => {
        const results = field.hasClass('disabled');
        assert.equal(results, boolean);
    });
}