/**
 * Created by jenksy on 3/17/17.
 */
(function () {
    // HomePageCtlr
    angular
        .module('wpAngularTheme')
        .controller( 'HomePageCtlr',HomePageCtlr);

    HomePageCtlr.$inject = ['$scope', '$log', '$anchorScroll','$location', '$rootScope'];
    
    function HomePageCtlr($scope, $log, $anchorScroll,$location,$rootScope) {
        var that = this;


    }
}());