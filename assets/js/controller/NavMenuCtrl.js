/**
 * Created by jenksy on 3/17/17.
 * Controller for the main nav menu
 */

// NavMenuCtrl
(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'NavMenuCtrl',NavMenuCtrl);

    NavMenuCtrl.$inject = ['$scope', '$log', '$rootScope', '$state', '$timeout', '$mdSidenav'];

    function NavMenuCtrl($scope, $log, $rootScope, $state, $timeout, $mdSidenav) {


        $scope.headShotImage = templateUrl+"/images/avatar.svg";
        /**
         * Sidenav toggler
         */

        $scope.toggleLeft = function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left')
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + 'left' + " is done");
                    });
        }









    }
}());