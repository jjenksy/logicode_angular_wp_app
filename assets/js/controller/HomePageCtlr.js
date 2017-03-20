/**
 * Created by jenksy on 3/17/17.
 */
(function () {
    // HomePageCtlr
    angular
        .module('wpAngularTheme')
        .controller( 'HomePageCtlr',HomePageCtlr);

    HomePageCtlr.$inject = ['$scope', '$log', '$anchorScroll','$location'];
    
    function HomePageCtlr($scope, $log, $anchorScroll,$location) {
        var that = this;

        /**
         * This method is the listener for scolling to the data in the page
         */
        $scope.$on('scrollTo', function(event, args) {
            var newHash = args;
            if ($location.hash() != newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
                $anchorScroll();
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        });


        /**
         * My callback function for the scroll to event directive
         * @param data
         */
        $scope.scrollEventCallback = function (name) {
            // $log.info(name);
        }
        
    }
}());