/**
 * Created by jenksy on 3/17/17.
 * Controller for the main nav menu
 */

// NavMenuCtrl
(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'NavMenuCtrl',NavMenuCtrl);

    NavMenuCtrl.$inject = ['$scope', '$log', '$rootScope', '$state'];

    function NavMenuCtrl($scope, $log, $rootScope, $state) {

        $scope.gotoAnchor = function(x) {
            //if we are home just go to the anchor on the home controller
            if($scope.isHome){
                //broadcast the scoll to position to the home controller
                $rootScope.$broadcast('scrollTo', x);
            }else{
                //if we are not home go to home and wait for the state to change then scroll to point
                $state.go('home');
                $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    // toState === $state.current
                    $rootScope.$broadcast('scrollTo', x);
                });

            }
        };

        /**
         * We check the state to insure were are on the home state if we are
         * not on the home state we set the button to return us to home then navigate to the current
         * section of the page
         */
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            // toState === $state.current
            $log.info($state.current.name);
            if($state.current.name == 'home'){
                $scope.isHome = true;
            }else{
                $scope.isHome = false;
            }
        });

    }
}());