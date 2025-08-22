import { Page } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { ProductPage } from 'src/pages/product.page';

export class ProductsPage extends BasePage {
  url = '/products';

  productCardLink = this.page.getByRole('link', {
    name: 'Fjallraven - Foldsack No. 1',
  });

  productsPageHeader = this.page.getByRole('heading', { name: 'All Products' });
  categoryInCard = this.page
    .locator('div.flex.items-center.justify-between')
    .locator('span.text-sm.text-gray-500');

  priceOfProductInCard = this.page.locator('.font-bold.text-lg');

  ratingInCard = this.page.locator('.flex.items-center');

  categoryButtons = [
    {
      label: "men's clothing",
      button: this.page.getByRole('button', {
        name: "men's clothing",
      }),
    },
    {
      label: 'jewelery',
      button: this.page.getByRole('button', { name: 'jewelery' }),
    },
    {
      label: 'accessories',
      button: this.page.getByRole('button', {
        name: 'accessories',
      }),
    },
    {
      label: 'shoes',
      button: this.page.getByRole('button', { name: 'shoes' }),
    },
    {
      label: 'electronics',
      button: this.page.getByRole('button', {
        name: 'electronics',
      }),
    },
    {
      label: 'clothing',
      button: this.page.getByRole('button', {
        name: 'clothing',
        exact: true,
      }),
    },
    { label: 'home', button: this.page.getByRole('button', { name: 'home' }) },
    {
      label: 'sports',
      button: this.page.getByRole('button', {
        name: 'sports',
      }),
    },
  ];

  priceButtons = [
    {
      name: 'Under $',
      min: 0,
      max: 25,
      button: this.page.getByRole('button', { name: 'Under $' }),
    },
    {
      name: '$25 - $',
      min: 25,
      max: 50,
      button: this.page.getByRole('button', { name: '$25 - $' }),
    },
    {
      name: '$50 - $',
      min: 50,
      max: 100,
      button: this.page.getByRole('button', { name: '$50 - $' }),
    },
    {
      name: '$100 - $',
      min: 100,
      max: 200,
      button: this.page.getByRole('button', { name: '$100 - $' }),
    },
    {
      name: 'Over $',
      min: 200,
      max: Infinity,
      button: this.page.getByRole('button', { name: 'Over $' }),
    },
  ];

  productsRatings = [
    {
      label: '1+ Stars',
      button: this.page.getByRole('button', { name: '1+ Stars' }),
    },
    {
      label: '2+ Stars',
      button: this.page.getByRole('button', { name: '2+ Stars' }),
    },
    {
      label: '3+ Stars',
      button: this.page.getByRole('button', { name: '3+ Stars' }),
    },
    {
      label: '4+ Stars',
      button: this.page.getByRole('button', { name: '4+ Stars' }),
    },
  ];

  constructor(page: Page) {
    super(page);
  }

  async pickOneProduct() {
    await this.productCardLink.click();

    return new ProductPage(this.page);
  }

  async countCategoryCards(): Promise<number> {
    let quantityOfCards = await this.categoryInCard.count();

    return quantityOfCards;
  }
}
