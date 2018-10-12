import { LitElement, html } from '@polymer/lit-element';
import cssCode from './style.css';

/**
 *
 */
export default class PleaseRename extends LitElement {
  /**
   * Defined Element Properties
   * @return {Object}
   */
  static get properties() {
    return {};
  }

  /**
   *
   */
  constructor() {
    super();

  }

  render() {
    const result = html`
	  <style> /* place css code in style */</style>
	  <div> <!-- place html --> </div>
`;

    return result;
  }
}

window.customElements.define('please-rename', PleaseRename);
