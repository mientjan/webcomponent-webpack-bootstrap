import { LitElement, html } from '@polymer/lit-element';
import cssCode from './style.css';

/**
 *
 */
export default class CounterElement extends LitElement {
  static get properties() {
    return {
      clicks: Number,
      value: Number,
    };
  }

  constructor() {
    super();
    this.clicks = 0;
    this.value = 0;
  }

  onIncrement() {
    console.log('_onIncrement');
    this.value++;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-incremented'));
  }

  onDecrement() {
    this.value--;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('counter-decremented'));
  }

  render() {
    const result = html`
		<style>${cssCode.toString()}</style>
		<div>
        <p>
            Clicked: <span>${this.clicks}</span> times.
            Value is <span>${this.value}</span>.
            <button @click="${() => this.onIncrement()}" title="Add 1">+</button>
            <button @click="${() => this.onDecrement()}" title="Minus 1">-</button>
        </p>
    </div>
`;

    return result;
  }
}

window.customElements.define('counter-element', CounterElement);
