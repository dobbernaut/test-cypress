import { StoreAllItemsPage } from './all-items.page';
import { StoreCatalogSearchPage } from './catalog-search.page';
import { StoreDealsPage } from './store-deals.page';
import { StoreTravelBookingsPage } from './travel-bookings.page';

export class StorePage {
  /** @type StoreAllItemsPage */
  #allItems;
  /** @type StoreDealsPage */
  #storeDeals;
  /** @type StoreTravelBookingsPage */
  #travelBookings;
  /** @type StoreCatalogSearchPage */
  #catalogSearch;

  #allItemsTab = 'a[title="All items"]';
  #storeDealsTab = 'a[title="Store deals"]';
  #travelBookingsTab = 'a[title="Travel bookings"]';
  #searchBox = 'input[id="search"]';
  #searchButton = '#search_mini_form button[title="Search"]';

  constructor() {
    this.#allItems = new StoreAllItemsPage();
    this.#storeDeals = new StoreDealsPage();
    this.#travelBookings = new StoreTravelBookingsPage();
    this.#catalogSearch = new StoreCatalogSearchPage();
  }

  get allItems() {
    return this.#allItems;
  }
  get storeDeals() {
    return this.#storeDeals;
  }
  get travelBookings() {
    return this.#travelBookings;
  }
  get catalogSearch() {
    return this.#catalogSearch;
  }

  openAllItems() {
    cy.get(this.#allItemsTab).click();
  }

  openStoreDeals() {
    cy.get(this.#storeDealsTab).click();
  }

  openTravelBookings() {
    cy.get(this.#travelBookingsTab).click();
  }

  /**
   * @param {string} search
   */
  searchTheFlybuysStore(search) {
    cy.get(this.#searchBox).type(search);
    cy.get(this.#searchButton).click();
  }
}
