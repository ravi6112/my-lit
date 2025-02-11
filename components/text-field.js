var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let TextField = class TextField extends LitElement {
    render() {
        return html `<div><input /></div>`;
    }
};
TextField.styles = css `
    input {
        width: 100%; 
        padding: 15px; 
        border: 1px solid #e8e8e8; 
        font-size: 16px; 
        transition: border .15s cubic-bezier(.4, 0, .7, 1);
    }
    div {
        position: relative; 
        display: inline-block; 
        vertical-align: middle;
    }
  `;
TextField = __decorate([
    customElement('text-field')
], TextField);
export { TextField };
//# sourceMappingURL=text-field.js.map