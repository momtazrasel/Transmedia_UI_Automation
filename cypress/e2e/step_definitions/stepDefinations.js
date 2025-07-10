import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
const locator = new locatorsPage();
const data = new allData();

const listNames = ["To Do", "In Progress"];

Given("User open transmedia website", () => {
    cy.visit(data.transmedia_url);
    cy.viewport(1280, 720)
});

Then("Click on the board", () => {
    cy.xpath(locator.boardCard).click()
})

Then("Input a board name and press enter", () => {
    const baseName = "Board_";
    cy.xpath(locator.boardInput)
        .type(`${baseName}{enter}`);
})

Then("Verify board created successfully", () => {
    cy.get('.board-title')
        .should('be.visible')
})

Then("Goto the created board", () => {
    cy.xpath(locator.createdBoard).click()
    cy.wait(data.oneSecond)
})

Then("Add two lists to the board", () => {

    listNames.forEach((name, index) => {
        if (index === 0) {
            cy.xpath(locator.addListButton).should('be.visible').click();
            cy.wait(1000);
        } else {
            cy.xpath(locator.addListButton2).should('be.visible').click();
        }

        cy.xpath(locator.listInput)
            .should('be.visible')
            .type(`${name}{enter}`);

        cy.wait(1000);
    });


})


Then("Verify two lists are successfully created", () => {
    cy.xpath(locator.listCard, { timeout: 10000 })
        .should('have.length', 2)
        .each(($el) => {
            cy.wrap($el).should('be.visible');
        });

})

Then("Delete the created list", () => {
    cy.xpath(locator.threeDotButton)
        .should("be.visible")
        .click();

    cy.xpath(locator.deleteList)
        .should("be.visible")
        .click();

    cy.xpath(locator.threeDotButtonBoard)
        .should("be.visible")
        .click();

    cy.xpath(locator.deleteBoard)
        .should("be.visible")
        .click();
})