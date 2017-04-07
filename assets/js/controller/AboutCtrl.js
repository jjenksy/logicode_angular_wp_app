/**
 * Created by jenksy on 4/1/17.
 */

(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'AboutCtrl',AboutCtrl);

    AboutCtrl.$inject = ['$scope'];
    
    function AboutCtrl($scope) {

        $scope.banner = templateUrl+"/images/LOGICODEBANNER.png";
        
    }
}());