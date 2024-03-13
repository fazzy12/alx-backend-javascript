import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._amount = val;
  }

  get Currency() {
    return this._Currency;
  }

  set Currency(val) {
    this._Currency = val;
  }

  displayFullPrice() {
    return `${this._Currency.displayFullCurrency()} ${this._amount}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
