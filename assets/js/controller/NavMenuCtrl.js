/**
 * Created by jenksy on 3/17/17.
 * Controller for the main nav menu
 */

// NavMenuCtrl
(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'NavMenuCtrl',NavMenuCtrl);

    NavMenuCtrl.$inject = ['$scope', '$log', '$rootScope', '$state', '$timeout'];

    function NavMenuCtrl($scope, $log, $rootScope, $state, $timeout) {
        //scroll down boolean
        $scope.scrollDown = true;
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
            if($state.current.name == 'home'){
                $scope.isHome = true;
            }else{
                $scope.isHome = false;
            }
        });


        /**
         * This method is the listener for scolling to the direction
         * args is true if down and false if up
         */
        $scope.$on('jj-scrollDirection', function(event, args) {

            $scope.scrollDown = args;
        });

        //scope objects for my classes
        $scope.About = '';
        $scope.Skills = '';
        $scope.Experience = '';
        $scope.Education = '';
        $scope.Contact = '';

        /**
         * This method is the listener for the highlight button method
         * need to implement an order and change method if About is assigned and Skills shows up then about
         * pops out and Skills replaces it when scrrolling down the reverse happens when scrolling up.
         */
        const domArray = ['About', 'Skills','Experience', 'Education', 'Interest', 'Contact' ];
        const highLightClass = "md-raised md-primary";
        var currentLevel = -1;
        $scope.$on('HighLightButtons', function(event, args) {
            //todo fix it where nothing gets highlighted if scroll is to fast

            $timeout(applyAndRemoveClass, 0);//adding a $timeout for debounce purposes
            function applyAndRemoveClass() {
                if($scope.scrollDown){
                    if(currentLevel<args.index){
                        currentLevel = args.index;
                        $scope[domArray[currentLevel]] = highLightClass;
                    }else{
                        if(currentLevel >0){
                            $scope[domArray[currentLevel-1]] = '';

                        }

                    }

                }else{
                    //todo fix the scroll up feature
                    $scope[domArray[currentLevel]] = '';
                    currentLevel = -1;

                }

            }

        });

    }
}());