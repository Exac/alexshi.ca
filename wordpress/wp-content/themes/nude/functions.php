<?php

/**
 * Setup the Nude theme.
 * 
 * @since 1.0
 */
function nude_setup() {

	// Set the text domain
	load_theme_textdomain( 'nude', get_template_directory() . '/languages' );

	// Add theme support
	add_theme_support( 'html5' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'custom-background', array( 'default-color' => 'eeeeee' ) );

	// Set the content width
	$GLOBALS['content_width'] = 768;

	/**
	 * Fires after the theme setup.
	 * 
	 * @since 1.0
	 */
	do_action( 'nude_theme_setup' );

}

add_action( 'after_setup_theme', 'nude_setup', 10, 0 );


/**
 * Allow CORS for development
 */
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}

add_action('init','add_cors_http_header');
