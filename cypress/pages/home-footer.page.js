export class HomePageFooter {
  #searchBox = 'footer form[class*="search"] input';
  #searchButton = 'footer button[type="submit"]';

  /**
   * @param {string} search
   */
  searchTheFlybuysStore(search) {
    cy.get(this.#searchBox).type(search);
    cy.get(this.#searchButton).click();
  }
}
