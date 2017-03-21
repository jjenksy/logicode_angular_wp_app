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
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />	
</head>
<body <?php body_class(); ?>>

<div layout="row" layout-fill ng-cloak="">
    <div ng-controller="NavMenuCtrl">
            <md-sidenav
                        class="md-sidenav-left" md-component-id="left"
                        md-disable-backdrop md-whiteframe="4"
                        md-is-locked-open="$mdMedia('gt-md')">

                <md-toolbar class="md-theme-indigo" layout-align="start center">
                    <div layout-margin layout="column" layout-align="start center">
                        <img  class="headShot" src="https://media.licdn.com/media/AAEAAQAAAAAAAA1KAAAAJDBhYWEyNmI2LTViYWItNGU3ZS1hNzZlLTY5YjhmNTAyMzAxZA.jpg">
                        <md-button href="<?php bloginfo('wpurl'); ?>">John Jenkins</md-button>
                        <p>Full Stack Developer</p>
                    </div>
                </md-toolbar>
                <md-content layout-margin layout="column">
                    <md-button ng-class="aboutClass" ng-click="gotoAnchor('About')">About Me</md-button>
                    <md-button ng-class="skillsClass" ng-click="gotoAnchor('Skills')">Work Skills</md-button>
                    <md-button ng-class="experienceClass" ng-click="gotoAnchor('Experience')">Work Experience</md-button>
                    <md-button ng-class="educationClass" ng-click="gotoAnchor('Education')">Education</md-button>
                    <md-button ng-class="contactClass" ng-click="gotoAnchor('Contact')">Contact</md-button>
                    <md-button ui-sref="list">Blog</md-button>
                </md-content>

            </md-sidenav>
    </div>

    <md-content flex layout-fill id="jj-scroll-watch">
        <md-toolbar >
            <div class="md-toolbar-tools">
                <md-button class="md-icon-button" aria-label="Settings" ng-disabled="true">
                    <!--                <md-icon md-svg-icon="img/icons/menu.svg"></md-icon>-->
                </md-button>

                <h2 flex md-truncate><?php echo bloginfo('name'); ?></h2>

                <md-button class="md-icon-button" aria-label="Favorite">
                    <!--                <md-icon md-svg-icon="img/icons/favorite.svg" style="color: greenyellow;"></md-icon>-->
                </md-button>

                <md-button class="md-icon-button" aria-label="More">
                    <!--                <md-icon md-svg-icon="img/icons/more_vert.svg"></md-icon>-->
                </md-button>
            </div>
        </md-toolbar>

                <div layout="column" layout-align="top center" flex layout-padding>




