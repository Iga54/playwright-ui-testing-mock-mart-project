import { Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { ProductPage } from 'src/pages/product.page';

export class ProductsPage extends BasePage {
  url = '/products';

  productCardLink = this.page.getByRole('link', {
    name: 'Fjallraven - Foldsack No. 1',
  });
  productsPageHeader = this.page.getByRole('heading', { name: 'All Products' });

  constructor(page: Page) {
    super(page);
  }

  async pickOneProduct() {
    this.productCardLink.click();

    return new ProductPage(this.page);
  }
}
