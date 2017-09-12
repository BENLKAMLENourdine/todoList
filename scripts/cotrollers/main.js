'use strict';

angular.module("todoListApp")
.controller("mainCtrl",function($scope,dataService){
    
    
        dataService.getTodos(function(response){
                $scope.todos = response.data;
            });
    
    $scope.deleteTodo = function(todo,index){
        dataService.deleteTodo(todo);
        $scope.todos.splice(index,1);
    };
    
    $scope.saveTodos = function(){
        var filteredTodos = $scope.todos.filter(function(todo){
            if(todo.edited)
                return todo;
        });
        dataService.saveTodos(filteredTodos);
    };
    
    $scope.addTodo = function(){
        var newTodo = {
            "name": "this is a new todo"   
        };
        $scope.todos.unshift(newTodo);
    };
    
    
    
    });