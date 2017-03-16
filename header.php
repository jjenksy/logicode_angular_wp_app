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
   	<?php wp_head();?>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />	
</head>
<body <?php body_class(); ?> layout="column">
<md-toolbar md-scroll-shrink>
    <div class="md-toolbar-tools">
        <h3>
            <span><a href="<?php bloginfo('wpurl'); ?>">
						<?php echo bloginfo('name'); ?>
					</a>
            </span>
        </h3>
    </div>
</md-toolbar>
<md-content>
    <div  layout="column" ng-cloak>

        <section layout="row" flex>

            <md-sidenav class="md-sidenav-left" md-component-id="left"
                        md-disable-backdrop md-whiteframe="4"
                        md-is-locked-open="$mdMedia('gt-md')">

                <md-toolbar class="md-theme-indigo">
                    <h1 class="md-toolbar-tools">Disabled Backdrop</h1>
                </md-toolbar>

                <md-content layout-margin>
                    <p>
                        This sidenav is not showing any backdrop, where users can click on it, to close the sidenav.
                    </p>
                    <md-button ng-click="toggleLeft()" class="md-accent">
                        Close this Sidenav
                    </md-button>
                </md-content>

            </md-sidenav>

            <md-content flex layout-padding>

                <div layout="column" layout-align="top center">