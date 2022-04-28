export class HomePageHeader {
  #flybuysStore = '.container [data-testid="primary-nav-store"]';

  openFlybuysStore() {
    cy.get(this.#flybuysStore).click();
  }
}
