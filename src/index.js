import { LitElement, html } from '@polymer/lit-element';
import cssCode from './style.css';

/**
 *
 */
export default class SpecialVideoElement extends LitElement {
  /**
   * Defined Element Properties
   * @return {Object}
   */
  static get properties() {
    return {
      src: String,
      width: Number,
      height: Number,
    };
  }

  /**
   *
   */
  constructor() {
    super();

    this.src = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ef/Running_Stream_Of_Water.webm/Running_Stream_Of_Water.webm.360p.webm';
    this.width = 100;
    this.height = 100;
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

  addEventListener(type, func){
    const videoElement = this.shadowRoot.querySelector('video');
    videoElement.addEventListener(type, func);
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

    console.log(this.shadowRoot);
    const result = html`
	  <style>${cssCode}</style>
	  <video src="${this.src}" width="${this.width}" height="${this.height}"></video>
`;

    return result;
  }
}

window.customElements.define('special-video-element', SpecialVideoElement);
