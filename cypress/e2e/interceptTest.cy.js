/// <reference types = "cypress" />
import {homePage, productSearchPAge} from '../support/pages'
const data = require('../fixture/data.json')

describe('Product Search', () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it('autocomplete product item should be return correctly', () => {
        homePage.searchMagnifier()
        productSearchPAge.search('Jacket')
        productSearchPAge.productList.first().should('have.attr', 'title', 'Ingrid Running Jacket')
    });
});
