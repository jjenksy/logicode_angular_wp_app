(function () {
var wpApp = new angular.module( 'wpAngularTheme',
    ['ui.router',
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMaterial'
    ] );
    //todo fix these injectables try downloading the newest bower instead of using cdn
    // 'ngAnimate',
    // 'ngAria',
    //     'ngMaterial'


wpApp.factory( 'Posts', function( $resource ) {
    return $resource( appInfo.api_url + 'posts/:ID', {
        ID: '@id'
    })
});



    wpApp.config( function( $stateProvider, $urlRouterProvider, $mdThemingProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state( 'list', {
                url: '/',
                controller: 'ListsCtrl',
                templateUrl: appInfo.template_directory + 'templates/list.html'
            })
            .state('details', {
                url:'/posts/:id',
                controller:'DetailsCtrl',
                templateUrl: appInfo.template_directory + 'templates/details.html'
            })


        /**
         * Config the theme here
         */
       $mdThemingProvider.theme('default')
           .primaryPalette('deep-purple')
           .accentPalette('purple');

    });

    /**
     * @to_trusted is the filer method to render the
     * content properly
     * this function returns the html as trusted html
     */
    wpApp.filter('to_trusted',['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }])

}());
