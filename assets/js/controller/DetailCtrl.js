/**
 * Details controller is for the deails page of the wordpess blog
 * Created by jenksy on 3/13/17.
 */

(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'DetailsCtrl',DetailsCtrl);

    DetailsCtrl.$inject = ['$scope', 'Posts' , '$stateParams', '$log'];

    function DetailsCtrl( $scope, Posts, $stateParams, $log) {
        $scope.page_title = 'Blog Listing';

        Posts.get({ID: $stateParams.id}).$promise.then(function (resolve) {
            $scope.post = resolve;


        }, function (reject) {
            $log.error(reject);

        })

    }

}());