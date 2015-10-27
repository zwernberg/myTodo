'use strict';

/**
 * @ngdoc function
 * @name myTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope, todoService, $resource) {



    $scope.collections = [
        { name: 'Urgent', value: 0 }, 
        { name: 'High', value: 1 }, 
        { name: 'Low', value: 2 },
        { name: 'Long Term', value: 3 }
    ];
    $scope.todo = new todoService();
    $scope.todo.priority = $scope.collections[0];

  	$scope.todos = todoService.query();
  	$scope.addTodo = function(addTodo){
      $scope.todo = todoService.save({'title': $scope.todo.title,'priority':$scope.todo.priority.value},function() {
        $scope.todos.push($scope.todo);
        $scope.todo = new todoService();
        $scope.todo.priority = $scope.collections[0];

      });
    }
    $scope.updateTodo = function(updateTodo){
      $scope.updatetodo = todoService.update({'todo': updateTodo.id},updateTodo,function(){
      });
    }
  	$scope.removeTodo = function(remTodo,index){
      $scope.remTodo = todoService.remove({'todo': remTodo.id},function(){
         $scope.todos.splice($scope.todos.indexOf(remTodo),1);
      });
  	}
  });
