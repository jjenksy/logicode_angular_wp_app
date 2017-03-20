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
                //todo use the targetid to target the nav event
                console.log(attrs.targetid);
                console.log(attrs.targetlistener);//todo implement the calling of the target listener
                //the target element
                var e = jQuery(element[0]);
                var doc = jQuery('#jj-scroll-watch');
                //watches for the scroll event by id of the content to target
                angular.element(jQuery('#jj-scroll-watch')).scroll(function() {
                            //console.log(doc.scrollTop());//Get the current vertical position of the scroll bar for the first element in the set of matched elements
                            //console.log($window.innerHeight);//height of the window
                        //todo optimize this to select
                        if (doc.scrollTop() + $window.innerHeight + offset > e.offset().top) {
                            //call the scrollTrigger method
                            scope.$apply(attrs.jjScrollTrigger);
                        }
                });
            }
        };
    });


}());
