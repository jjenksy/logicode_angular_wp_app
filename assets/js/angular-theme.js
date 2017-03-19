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
     * todo fix the implementation of this
     */
    wpApp.directive('jjScrollTrigger', function($window) {
        return {
            /**
             * @param scope
             * @param element
             * @param attrs the attributes on the dom element
             */
            link : function(scope, element, attrs) {
                //the offset is the setting for the thresh hold attribute
                var offset = parseInt(attrs.threshold) || 0;
                //the target element
                var e = jQuery(element[0]);
                var doc = jQuery(document);
                angular.element(document).bind('scroll', function() {
                    console.log(doc.scrollTop() + $window.innerHeight + offset);
                    console.log(e.offset().top);

                    if (doc.scrollTop() + $window.innerHeight + offset > e.offset().top) {
                        //call the scrollTrigger method
                        scope.$apply(attrs.scrollTrigger);
                    }
                });
            }
        };
    });


}());
