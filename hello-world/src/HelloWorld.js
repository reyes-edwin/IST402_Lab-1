// Importing template literal tags and the LitElement base class.
import { html, css, LitElement } from 'lit';

/**
 * I don't know what the export is doing but here we are creating a class that
 * would inherit all of the methods and properties from the LitElement.
 */
export class HelloWorld extends LitElement {
  // receives input and store their states as properties. Allows the properties to  update when change.
  static get properties() {
    return {
      introduction: { type: String },
      planet: { type: String },
    };
  }

  // styles elements in the component's shadow root.
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 10px;
      }
      .planet {
        color: var(--planet-color, #00ff6a);
        font-weight: bold;
      }
    `;
  }

  // Calling the parent class and initializing the properties.
  constructor() {
    super();
    this.introduction = 'Hello';
    this.planet = 'World';
  }

  /**
   * Defines the internal DOM. Functions as a template literal.
   * @returns the object that describes the HTML for Lit to render.
   */
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.introduction}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

  // function that's called when a click happens.
  togglePlanet() {
    if (this.planet === 'World') {
      this.planet = 'Neptune';
    } else {
      this.planet = 'World';
    }
  }
}
// defines the custom element we are using and the class it's associated with.
customElements.define('my-customelement', HelloWorld);
