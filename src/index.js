import { LitElement, html } from '@polymer/lit-element';
import cssCode from './style.css';

/**
 *
 */
class SpecialVideoElement extends LitElement {
  /**
   * Defined Element Properties
   * @return {Object}
   */
  static get properties() {
    return {
      src: String,
      width: Number,
      height: Number,
      autoplay: Boolean,
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
    this.autoplay = false;
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

    console.log(changedProperties);
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
   * The render method uses lit-html for rendering its html.
   * Check https://polymer.github.io/lit-html/guide/writing-templates for more information.
   *
   * @protected
   * @return {TemplateResult}
   */
  render() {

    const result = html`
	  <style>${cssCode}</style>
	  <div class="wrapper">
	    <div class="close">X</div>
	    <video src="${this.src}" width="${this.width}" height="${this.height}" ?autoplay=${this.autoplay}></video>
    </div>
`;

    return result;
  }
}

window.customElements.define('special-video-element', SpecialVideoElement);
