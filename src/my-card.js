import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = '';
    this.link = '#';
    this.image = null;
    this.description = '';
    this.buttonDesc = '';
    this.fancy = false;


    
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) {
       display: block;
       background-color: pink;
       border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
}

      
      .card {
        padding: 4px;
        width: 275px;
        border-radius: 8px;
        text-align: center;
        background-color: white;
        border: 2px groove;
      }
 
      .cardTitle {
        margin: 16px;
        font-size: 24px;
      }

      img {
        margin: auto;
        display: flex;
        height: 150px;
        width: 270px;
      }

      button {
        margin: auto;
        display: flex;
        background-color: pink;
      }

      a:focus,
      a:hover {
        color: #202A44;;
      }

      a {
        text-decoration: none;
        color: white;
      }
    `;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
   openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <img src="${this.image}">
      <div class="cardTitle">${this.title}</div>
      <p>${this.description}</p>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
        <slot name="description">${this.description}</slot>
      </div>
    </details>
      <button><a href="${this.link}">${this.buttonDesc}</a></button>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String},
      link: { type: String},
      description: { type: String},
      buttonDesc: { type: String},
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);