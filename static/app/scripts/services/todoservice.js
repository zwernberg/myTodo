'use strict';

/**
 * @ngdoc service
 * @name myTodoApp.todoService
 * @description
 * # todoService
 * Service in the myTodoApp.
 */
angular.module('myTodoApp')
.factory('todoService', function ($resource) {
      var data = $resource('http://localhost:8000/todos/:todo',{todo: "@todo"}, {
      update:{
          method:'PUT'
          }
      });
      return data;
  });