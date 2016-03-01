/// <reference path="C:\Users\Martina\Documents\Skola\Examensarbete\ExamensarbeteAngularJS\ExamensarbeteAngularJS\Scripts/angular.min.js" />

var app = angular.module('shoes', []);
app.controller('ShoesController', ['$scope', '$http', function ($scope, $http) {
    $scope.shoes = [];

    $http.get('./json/shoes.json').success(function (data) {
        $scope.shoes = data.shoes;
    });
    $scope.search = {};
    $scope.searchNameAndBrand = function (item) {
        if ($scope.searchText == undefined)
            return true;
        else {
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.brand.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
                return true;
        }
        return false;
    };
    $scope.getColor = function () {
        $scope.color = [];
        for (var i = 0; i < $scope.shoes.length; i++) {
            for (var x = 0; x < $scope.shoes[i].colors.length; x++) {
                if ($scope.color.indexOf($scope.shoes[i].colors[x].color) === -1)
                    $scope.color.push($scope.shoes[i].colors[x].color);
            }
        }
        return $scope.color;
    };
    $scope.getSize = function () {
        $scope.size = [];
        for (var i = 0; i < $scope.shoes.length; i++) {
            var size = 0;
            for (var x = 0; x < $scope.shoes[i].size.length; x++) {
                size = $scope.shoes[i].size[x].size;
                quantity = $scope.shoes[i].size[x].quantity;
                if ($scope.size.indexOf(size) === -1) {
                    $scope.size.push(size);
                }
            }
        }
        return $scope.size;
    };

    $scope.shoesView = 'shoes.html';
}]);