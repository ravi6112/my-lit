/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./components/text-field/text-field";
import "./components/button/button";
import { connect } from 'pwa-helpers';
import store from './redux/store';
import { addTodo, clearCompleted, filterChange, updateTaskStatus } from './redux/todosSlice';

const visibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
}
@customElement('my-element')
export class MyElement extends connect(store)(LitElement) {

  @property({ type: Array }) todos: { task: string; completed: boolean }[] = [];
  @property({ type: String }) filter = visibilityFilters.SHOW_ALL;
  @property({ type: String }) task = '';


  override stateChanged(state: { todo: { todos: never[]; filter: string; } }): void {
    console.log(state.todo.todos);
    this.todos = state.todo.todos;
    this.filter = state.todo.filter;
  }

  static override styles = css`
    .todo-add { 
        display: flex; 
        flex-direction: row; 
        gap: 16px; 
    }
  `;

  override render() {
    return html`
    <h1>todo</h1>
    <div class='todo-add' @keyup=${this.keyHandler}> 
      <text-field class='task' aria-placeholder='task' @input-change=${this.updateTask} inputValue=${this.task}></text-field> 
      <button-element buttonName="Add" @click=${this.addTodo}></button-element>
    </div>
    
    <div class='todo-list'>
      ${this.applyfilter().map((todo: { task: string; completed: boolean }) => html`
      <div class='todo-item'>
        <input type='checkbox' .checked=${todo.completed} @change=${(e: Event) => this.updateTaskStatus(todo.task, (e.target as HTMLInputElement).checked)}/>
        <span>${todo.task}</span>
      </div>`)}
    </div>
    <div class = "radio-group" data-value=${this.filter} @change=${this.filterChange}>
      ${Object.values(visibilityFilters).map(filter => html`
        <input type='radio' name='filter' .value=${filter}  />
        <label>${filter}</label>`
    )}
       <button-element buttonName="Clear Completed" @click=${this.clearCompleted}></button-element>
    </div>`;
  }

  clearCompleted() {
    store.dispatch(clearCompleted());
  }

  filterChange(e: Event) {
    store.dispatch(filterChange((e.target as HTMLInputElement).value));
  }
  applyfilter() {
    switch (this.filter) {
      case visibilityFilters.SHOW_ACTIVE:
        return this.todos.filter(todo => !todo.completed);
      case visibilityFilters.SHOW_COMPLETED:
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  updateTaskStatus(task: string, completed: boolean) {
    store.dispatch(updateTaskStatus({ task, completed }));
  }

  keyHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  updateTask(e: CustomEvent) {
    this.task = e.detail.value;
  }

  addTodo() {
    if (this.task.trim()) {
      console.log("addTodo");
      store.dispatch(addTodo(this.task));
      this.task = '';
    }
  }
}

