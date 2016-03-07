// <reference path="C:\Users\Martina\Documents\Skola\Examensarbete\ExamensarbeteAngularJS\ExamensarbeteAngularJS\Scripts/angular.min.js" />

var app = angular.module('shoeFilter', []);

app.filter('searchShoes', function () {
    return function (shoes, search) {
        var output = [];
        if (search.text != undefined && search.text.length != 0 && search.colors != '-- Välj färg --' && search.colors != undefined) {
            for (var i = 0; i < shoes.length; i++) {
                for (var x = 0; x < shoes[i].colors.length; x++) {
                    if ((shoes[i].name.toLowerCase().indexOf(search.text.toLowerCase()) != -1
                        || shoes[i].brand.toLowerCase().indexOf(search.text.toLowerCase()) != -1)
                        && shoes[i].colors[x].color == search.colors)
                        output.push(shoes[i]);
                }
            }
        }

        else if (search.text != undefined && search.text.length != 0 && (search.colors == '-- Välj färg --' || search.colors == undefined)) {
            for (var i = 0; i < shoes.length; i++) {
                if (shoes[i].name.toLowerCase().indexOf(search.text.toLowerCase()) != -1
                    || shoes[i].brand.toLowerCase().indexOf(search.text.toLowerCase()) != -1)
                    output.push(shoes[i]);
            }
        }

        else if ((search.text == undefined || search.text.length == 0) && search.colors != '-- Välj färg --' && search.colors != undefined) {
            for (var i = 0; i < shoes.length; i++) {
                for (var x = 0; x < shoes[i].colors.length; x++) {
                    if (shoes[i].colors[x].color == search.colors)
                        output.push(shoes[i]);
                }
            }
        }

        else
            for (var i = 0; i < shoes.length; i++) {
                output.push(shoes[i]);
            }

        return output;
    }
});