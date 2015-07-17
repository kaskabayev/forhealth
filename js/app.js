(function(){
    var app = angular.module('categories', []);

    app.controller('CategoriesController', function(){
        this.current = 1;
        this.setShown = function(current){
            if (current) this.current = current;
            else current = 1;
        };
        this.isShown = function(current){
            return this.current == current;
        };
    });
})();