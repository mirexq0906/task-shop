import { createStore } from 'vuex';
import { productInterface } from '../interfaces';
import { modalsModule } from './modalsModule';

const basket = localStorage.getItem('basket');
const favorites = localStorage.getItem('favorites');
interface MainStore {
  products: productInterface[];
  basketProducts: { [keys: string]: productInterface };
  favoritesProducts: { [keys: string]: productInterface };
}
const store = createStore({
  state(): MainStore {
    return {
      products: [
        {
          id: 1,
          img: 'product-1.png',
          title: 'Товар 1',
          count: 1,
          price: 1120,
          oldPrice: 1427,
        },
        {
          id: 2,
          img: 'product-1.png',
          title: 'Товар 2',
          count: 1,
          price: 3221,
          oldPrice: 4427,
        },
        {
          id: 3,
          img: 'product-1.png',
          title: 'Товар 3',
          count: 1,
          price: 2122,
          oldPrice: 3427,
        },
        {
          id: 4,
          img: 'product-1.png',
          title: 'Товар 4',
          count: 1,
          price: 4323,
          oldPrice: 5427,
        },
      ],
      basketProducts: basket ? JSON.parse(basket) : {},
      favoritesProducts: favorites ? JSON.parse(favorites) : {},
    };
  },
  mutations: {
    addAndRemovebasket(state: MainStore, product: productInterface): void {
      if (Object.keys(state.basketProducts).includes(String(product.id))) {
        delete state.basketProducts[product.id];
      } else {
        state.basketProducts[product.id] = product;
      }
      localStorage.setItem('basket', JSON.stringify(state.basketProducts));
    },
    clearBasket(state: MainStore): void {
      state.basketProducts = {};
      localStorage.setItem('basket', JSON.stringify(state.basketProducts));
    },
    addAndRemoveFavorites(state: MainStore, product: productInterface): void {
      if (Object.keys(state.favoritesProducts).includes(String(product.id))) {
        delete state.favoritesProducts[product.id];
      } else {
        state.favoritesProducts[product.id] = product;
      }
      localStorage.setItem(
        'favorites',
        JSON.stringify(state.favoritesProducts)
      );
    },
    increaseCount(state: MainStore, id: number): void {
      if (state.basketProducts[id]['count'] < 100) {
        state.basketProducts[id]['count']++;
      }
    },
    decreaseCount(state: MainStore, id: number) {
      if (state.basketProducts[id]['count'] > 1) {
        state.basketProducts[id]['count']--;
      }
    },
  },
  getters: {
    getProducts(state: MainStore): productInterface[] {
      return state.products;
    },
    getBasketProductsValues(state: MainStore): productInterface[] {
      return Object.values(state.basketProducts);
    },
    getBasketProductsKeys(state: MainStore): string[] {
      return Object.keys(state.basketProducts);
    },

    getFavoritesProductsValues(state: MainStore): productInterface[] {
      return Object.values(state.favoritesProducts);
    },
    getFavoritesProductsKeys(state: MainStore): string[] {
      return Object.keys(state.favoritesProducts);
    },
    getTotalPriceBasket(state: MainStore): number {
      const arr: productInterface[] = Object.values(state.basketProducts);
      const result = arr.reduce(
        (acc: number, item: productInterface) => item.price * item.count + acc,
        0
      );
      return result;
    },
  },
  modules: {
    modals: modalsModule,
  },
});

export default store;
