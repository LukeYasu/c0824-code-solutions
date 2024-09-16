"use strict";
let todos = readTodos();
function writeTodos() {
    let todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    const todosStorage = localStorage.getItem('todos-storage');
    if (todosStorage !== null) {
        return JSON.parse(todosStorage);
    }
    else {
        return [];
    }
}
