'use strict';

angular.module("todoListApp")
    .service('dataService',function($http){
    
        this.getTodos = function(callback){
            $http.get('mock/todos.json').then(callback);
        };
    
        this.deleteTodo = function(todo){
            console.log(todo.name + " was deleted");
        };
    
    this.saveTodos = function(todos){
            console.log(todos.length + " was saved");
        };
            
    });