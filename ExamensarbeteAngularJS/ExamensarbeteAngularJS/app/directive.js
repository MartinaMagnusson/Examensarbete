/// <reference path="C:\Users\Martina\Documents\Skola\Examensarbete\ExamensarbeteAngularJS\ExamensarbeteAngularJS\Scripts/angular.min.js" />

var app = angular.module('shoeDirective', []);

app.directive('shoes', function () {
    return {
        restrict: 'E',
        templateUrl: '../views/shoes.html'
    }
});