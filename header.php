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
<body <?php body_class(); ?>>
<md-toolbar md-scroll-shrink ng-if="true">
    <div class="md-toolbar-tools">
        <h3>
            <span><a href="<?php bloginfo('wpurl'); ?>">
						<?php echo bloginfo('name'); ?>
					</a>
            </span>
        </h3>
    </div>
</md-toolbar>

<md-content layout="column" class="content-wrapper md-padding" flex layout-column layout-fill>
<!--    <div ng-if="$root.globals.currentUser" ng-include="'app/nav/nav.header.html'" ng-controller="NavMenuCtrl as ctrl"></div>-->
