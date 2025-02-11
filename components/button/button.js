var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ButtonElement = class ButtonElement extends LitElement {
    constructor() {
        super(...arguments);
        this.buttonName = '';
    }
    render() {
        return html `<button class='custom-btn btn'>${this.buttonName}</button>`;
    }
};
ButtonElement.styles = css `
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
__decorate([
    property({ type: String })
], ButtonElement.prototype, "buttonName", void 0);
ButtonElement = __decorate([
    customElement('button-element')
], ButtonElement);
export { ButtonElement };
//# sourceMappingURL=button.js.map