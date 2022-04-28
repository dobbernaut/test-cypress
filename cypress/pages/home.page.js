import { HomePageFooter } from './home-footer.page';
import { HomePageHeader } from './home-header.page';

export class HomePage {
  /** @type HomePageHeader */
  #header;
  /** @type HomePageFooter */
  #footer;

  constructor() {
    this.#header = new HomePageHeader();
    this.#footer = new HomePageFooter();
  }

  get header() {
    return this.#header;
  }
  get footer() {
    return this.#footer;
  }

  open() {
    cy.visit('https://flybuys.co.nz');
  }
}
