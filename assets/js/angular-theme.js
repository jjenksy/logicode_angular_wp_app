(function () {
var wpApp = new angular.module( 'wpAngularTheme',
    ['ui.router',
        'ngResource',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'chart.js'
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
            .state( 'About', {
                url: '/',
                controller: 'AboutCtrl',
                templateUrl: appInfo.template_directory + 'templates/about.view.html'
            }).state( 'skills', {
                url: '/',
                controller: 'SkillsCtrl',
                templateUrl: appInfo.template_directory + 'templates/skills.view.html'
            }).state( 'education', {
                url: '/',
                controller: 'EducationCtrl',
                templateUrl: appInfo.template_directory + 'templates/education.view.html'
            }).state( 'contact', {
                url: '/',
                controller: 'ContactCtrl',
                templateUrl: appInfo.template_directory + 'templates/contact.view.html'
            });

        /**
         * Config the theme here
         */

        var customPrimary = {
            '50': '#b0adc4',
            '100': '#a29eba',
            '200': '#938faf',
            '300': '#8581a4',
            '400': '#77729a',
            '500': '#6a658d',
            '600': '#5f5a7e',
            '700': '#54506f',
            '800': '#484560',
            '900': '#3d3a52',
            'A100': '#bebccf',
            'A200': '#cdcbda',
            'A400': '#dbdae4',
            'A700': '#323043'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
                customPrimary);

        var customAccent = {
            '50': '#22323b',
            '100': '#2b3f4b',
            '200': '#354d5b',
            '300': '#3e5a6b',
            '400': '#47687c',
            '500': '#51758c',
            '600': '#688fa8',
            '700': '#789bb1',
            '800': '#88a7ba',
            '900': '#98b3c4',
            'A100': '#688fa8',
            'A200': '#5a839c',
            'A400': '#51758c',
            'A700': '#a8bfcd'
        };
        $mdThemingProvider
            .definePalette('customAccent',
                customAccent);

        var customWarn = {
            '50': '#ffb280',
            '100': '#ffa266',
            '200': '#ff934d',
            '300': '#ff8333',
            '400': '#ff741a',
            '500': '#ff6400',
            '600': '#e65a00',
            '700': '#cc5000',
            '800': '#b34600',
            '900': '#993c00',
            'A100': '#ffc199',
            'A200': '#ffd1b3',
            'A400': '#ffe0cc',
            'A700': '#803200'
        };
        $mdThemingProvider
            .definePalette('customWarn',
                customWarn);

        var customBackground = {
            '50': '#ffffff',
            '100': '#ffffff',
            '200': '#ffffff',
            '300': '#ffffff',
            '400': '#faf9f8',
            '500': '#efeee9',
            '600': '#e4e3da',
            '700': '#dad7cb',
            '800': '#cfccbd',
            '900': '#c4c0ae',
            'A100': '#ffffff',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#b9b59f'
        };
        $mdThemingProvider
            .definePalette('customBackground',
                customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .warnPalette('customWarn')
            .backgroundPalette('customBackground')

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
