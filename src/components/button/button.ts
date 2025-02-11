import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-element')
export class ButtonElement extends LitElement {
  @property({ type: String })
  buttonName = '';

  static override styles = css`
    .custom-btn {
        width: 130px;
        height: 50px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
                    7px 7px 20px 0px rgba(0,0,0,.1),
                    4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;
    }
    .button-frame {
        width: 90%;
    }
    .btn {
        border: none;
        color: #000;
    }
    .btn:after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      direction: rtl;
      z-index: -1;
      box-shadow:
       -7px -7px 20px 0px #fff9,
       -4px -4px 5px 0px #fff9,
       7px 7px 20px 0px #0002,
       4px 4px 5px 0px #0001;
      transition: all 0.3s ease;
    }
    .btn:hover {
      color: #000;
    }
    .btn:hover:after {
      left: auto;
      right: 0;
      width: 100%;
    }
    .btn:active {
      top: 2px;
    }
      `;
  override render() {
    return html`<button class='custom-btn btn'>${this.buttonName}</button>`;
  }
}
