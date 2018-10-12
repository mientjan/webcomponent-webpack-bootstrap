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

  /**
   * Implement to control if updating and rendering should occur when property values
   * change or requestUpdate() is called. The changedProperties argument is a Map with keys for the
   * changed properties pointing to their previous values. By default, this method always returns
   * true, but this can be customized as an optimization to avoid updating work when changes occur,
   * which should not be rendered.
   *
   * @protected
   * @param {Object} changedProperties
   * @return {boolean}
   */
  shouldUpdate(changedProperties){
    return true
  }

  /**
   * Implement to describe the element's DOM using lit-html. Ideally, the render
   * implementation is a pure function using only the element's current properties to describe the
   * element template. Note, since render() is called by update(), setting properties does not
   * trigger an update, allowing property values to be computed and validated.
   *
   * @protected
   * @return {TemplateResult}
   */
  render() {
    const result = html`
	  <style> /* place css code in style */</style>
	  <div> <!-- place html --> </div>
`;

    return result;
  }
}

window.customElements.define('please-rename', PleaseRename);
