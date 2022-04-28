export class StoreCatalogSearchPage {
  #numberOfSearchItems = '[itemprop="numberOfItems"]';
  #itemsList = '.ais-Hits-list';
  #items = '.ais-Hits-item';
  #product = '[itemprop="itemListElement"]';
  #productUrl = '[itemprop="url"]';
  #productName = '[itemprop="name"]';
  #productPrice = '[itemprop="lowPrice"]';

  /**
   * Return the number of search item results.
   *
   * @returns {Cypress.Chainable<number>}
   */
  getNumberOfSearchItems() {
    return cy.get(this.#numberOfSearchItems, { timeout: 10000 }).then((number) => {
      return parseInt(number.text(), 10);
    });
  }
}
