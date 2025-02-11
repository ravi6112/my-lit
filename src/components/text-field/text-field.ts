import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
@customElement('text-field')
export class TextField extends LitElement {
    @property({ type: String }) 
    inputValue = '';

    static override styles = css`
    input { 
        padding: 15px; 
        border: 1px solid #e8e8e8; 
        font-size: 16px; 
        transition: border .15s cubic-bezier(.4, 0, .7, 1);
    }
    .input {
        position: relative; 
        display: inline-block; 
        vertical-align: middle;
    }
  `;
    override render() {
        return html`
        <div class='input' >
            <input type='text' placeholder='Enter task' @change=${this.updateInput} .value=${this.inputValue} />
        </div>`;
    }

    updateInput(e: Event) {
        this.dispatchEvent(new CustomEvent('input-change', { detail: { value: (e.target as HTMLInputElement).value } }));
    }

}


