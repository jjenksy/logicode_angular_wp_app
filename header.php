<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?> ng-app="wpAngularTheme">
<head>
  	<meta charset="<?php bloginfo( 'charset' ); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	
  	<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  	<meta name="author" content="Ciplex">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="/favicon.ico">
  	<link rel="apple-touch-icon" href="/favicon.png">
<!--   wp_head function is used to inject the scripts that were specified in the foote-->
   	<?php wp_head();?>
    <script src='https://code.playcanvas.com/playcanvas-stable.min.js'></script>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <script type="text/javascript">
        //set a global vairable to the templat urls so I can use it later in
        //my javascript
        var templateUrl = '<?= get_bloginfo("template_url"); ?>';

    </script>
</head>
<body <?php body_class(); ?>>

<div layout="row" layout-fill ng-cloak="">
    <div ng-controller="NavMenuCtrl">
            <md-sidenav
                        class="md-sidenav-left" md-component-id="left"
                        md-whiteframe="4"
                        md-is-locked-open="$mdMedia('gt-sm')">

                <md-toolbar class="md-theme-indigo" layout-align="start center">
                    <div layout-margin layout="column" layout-align="start center">
                        <img class="headShot" ng-src="{{headShotImage}}"/>
                        <md-button href="<?php bloginfo('wpurl'); ?>">John Jenkins</md-button>
                        <p>Full Stack Developer</p>
                    </div>
                </md-toolbar>
                <md-content layout-margin layout="column">
                    <md-button ng-click="toggleLeft()" ui-sref="About">About Me</md-button>
                    <md-button ng-click="toggleLeft()" ui-sref="skills">Skills</md-button>
                    <md-button ng-click="toggleLeft()" ui-sref="education">Games</md-button>
                    <md-button ng-click="toggleLeft()" ui-sref="contact">Contact</md-button>
                    <md-button ng-click="toggleLeft()" ui-sref="list">Blog</md-button>
                </md-content>

            </md-sidenav>
    </div>

    <md-content flex layout-fill>
        <md-toolbar ng-controller="NavMenuCtrl" hide-gt-sm flex>
            <div class="md-toolbar-tools">


                <md-button ng-click="toggleLeft()" class="md-icon-button" aria-label="Toggle" hide-gt-md
                <md-icon  aria-label="menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/></svg></md-icon>
                </md-button>


            </div>
        </md-toolbar>

                <div layout="column" layout-align="top center" flex layout-padding>




