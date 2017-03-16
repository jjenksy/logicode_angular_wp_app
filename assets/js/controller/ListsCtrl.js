/**
 * Created by jenksy on 3/13/17.
 * The controller for querying data to populate
 * the list of blog posts
 */


(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'ListsCtrl',ListsCtrl);

    ListsCtrl.$inject = ['$scope', 'Posts' , '$stateParams', '$log'];

    function ListsCtrl( $scope, Posts, $stateParams, $log) {

            $scope.page_title = 'Blog Listing';

            Posts.query().$promise.then(function (resolve) {
                $scope.posts = resolve;
                $log.info(resolve);
            }, function (reject) {
                console.log(reject);

            })



    }

}());