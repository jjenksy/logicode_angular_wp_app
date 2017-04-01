/**
 * Created by jenksy on 4/1/17.
 */

(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'AboutCtrl',AboutCtrl);

    AboutCtrl.$inject = ['$scope'];
    
    function AboutCtrl($scope) {

        console.log(templateUrl);
        $scope.templateUrl = templateUrl+"/images/LOGICODEBANNER.png";
        
    }
}());