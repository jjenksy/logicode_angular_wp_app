(function () {
var wpApp = new angular.module( 'wpAngularTheme',
    ['ui.router',
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMaterial'
    ] );


wpApp.factory( 'Posts', function( $resource ) {
    return $resource( appInfo.api_url + 'posts/:ID', {
        ID: '@id'
    })
});


    /**
     * Config the app to take the following routes
     */
    wpApp.config( function( $stateProvider, $urlRouterProvider, $mdThemingProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state( 'list', {
                url: '/list',
                controller: 'ListsCtrl',
                templateUrl: appInfo.template_directory + 'templates/list.html'
            })
            .state('details', {
                url:'/posts/:id',
                controller:'DetailsCtrl',
                templateUrl: appInfo.template_directory + 'templates/details.html'
            })
            .state( 'home', {
                url: '/',
                controller: 'HomePageCtlr',
                templateUrl: appInfo.template_directory + 'templates/homePage.view.html'
            });

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


    /**
     * The scrolling to directive for angular
     * The function scrollEventCallback() gets called, if it is 100 pixel or less below the currently visible area of the document. Please note,
     * that I used jQuery in this example, so for this to work you will have to include it as well. I hope this is what you asked for.
     * Todo fix this directive in order to have a scroll to highlight the button 
     */
    wpApp.directive('scrollTrigger', function($window) {
        return {
            link : function(scope, element, attrs) {
                var offset = parseInt(attrs.threshold) || 0;
                var e = jQuery(element[0]);
                var doc = jQuery(document);
                angular.element(document).bind('scroll', function() {
                    if (doc.scrollTop() + $window.innerHeight + offset > e.offset().top) {
                        scope.$apply(attrs.scrollTrigger);
                    }
                });
            }
        };
    });


}());
