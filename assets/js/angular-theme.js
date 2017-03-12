(function () {
var wpApp = new angular.module( 'wpAngularTheme',
    ['ui.router',
        'ngResource'] );

wpApp.factory( 'Posts', function( $resource ) {
    return $resource( appInfo.api_url + 'posts/:ID', {
        ID: '@id'
    })
});

wpApp.controller( 'ListCtrl', ['$scope', 'Posts', function( $scope, Posts ) {
    console.log('ListCtrl');
    $scope.page_title = 'Blog Listing';

    Posts.query().$promise.then(function (resolve) {
        $scope.posts = resolve;
    }, function (reject) {
        console.log(reject);

    })

}]);

    wpApp.config( function( $stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state( 'list', {
                url: '/',
                controller: 'ListCtrl',
                templateUrl: appInfo.template_directory + 'templates/list.html'
            })
    })

}());
