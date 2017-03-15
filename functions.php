<?php

class wp_ng_theme {
	
	function enqueue_scripts() {

		wp_enqueue_style( 'angular-materialCSS', 'https://ajax.googleapis.com/ajax/libs/angular_material/0.11.2/angular-material.min.css', array(), '1.0', 'all' );
		wp_enqueue_style( 'bootstrapCSS', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css', array(), '1.0', 'all' );
		wp_enqueue_script( 'angular-core', get_template_directory_uri() . '/bower_components/angular/angular.min.js', array( 'jquery' ), '1.0', false );
		wp_enqueue_script( 'angular-resource', get_template_directory_uri() . '/bower_components/angular-resource/angular-resource.min.js', array('angular-core'), '1.0', false );
		wp_enqueue_script( 'ui-router', get_template_directory_uri() . '/bower_components/angular-ui-router/release/angular-ui-router.min.js', array( 'angular-core' ), '1.0', false );
		//todo download and install the directories for bower hookup
		wp_enqueue_script( 'angular-animate', get_template_directory_uri() . '/bower_components/angular-animate/angular-animate.min.js', array( 'angular-core' ), '1.0', false );
		wp_enqueue_script( 'angular-aria',  get_template_directory_uri() . '/bower_components/angular-aria/angular-aria.min.js', array( 'angular-core' ), '1.0', false );

    // AngularJS Material Javascript now available via Google CDN; version 1.0.7 used here
		wp_enqueue_script( 'angular-material',get_template_directory_uri() . '/bower_components/angular-material/angular-material.min.js', array( 'angular-core' ), '1.0', false );
		wp_enqueue_script( 'ngScripts', get_template_directory_uri() . '/assets/js/angular-theme.js', array( 'ui-router' ), '1.0', false );
		wp_enqueue_script( 'detailsCtrl', get_template_directory_uri() . '/assets/js/controller/DetailCtrl.js', array('ngScripts'), '1.0', false );
		wp_enqueue_script( 'listCtrl', get_template_directory_uri() . '/assets/js/controller/ListsCtrl.js', array('ngScripts'), '1.0', false );
		wp_localize_script( 'ngScripts', 'appInfo',
			array(
				
				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
				
			)
		);
		
	}

//	this function is used to custom configure the rest api
	function register_new_field(){
        register_api_field('post',
            'my_awesome_field',
            array(
                'get_callback' => array($this, 'awesome_field') //callback funtion for my get request
            ));
    }

    //callback function for my rest endpoint
    function awesome_field($object, $field_name,$request ){
            return 'My awesome string';
    }
    //end rest api custom config end point
}

$ngTheme = new wp_ng_theme();
add_action( 'wp_enqueue_scripts', array( $ngTheme, 'enqueue_scripts' ) );

//rest api hook to add the custom endpoint
add_action('rest_api_init', array( $ngTheme, 'register_new_field' ));
?>