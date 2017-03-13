/**
 * Details controller is for the deails page of the wordpess blog
 * Created by jenksy on 3/13/17.
 */

(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'DetailsCtrl',DetailsCtrl);

    DetailsCtrl.$inject = ['$scope', 'Posts' , '$stateParams'];

    function DetailsCtrl( $scope, Posts, $stateParams) {
        console.log('DetailsCtrl');
        $scope.page_title = 'Blog Listing';

        Posts.query().$promise.then(function (resolve) {
            $scope.posts = resolve;
        }, function (reject) {
            console.log(reject);

        })

    }

}());