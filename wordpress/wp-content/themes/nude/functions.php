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



/**
 * Have JSON API provide custom fields
 */
function get_custom_value( $object, $field_name, $request ) {
	return get_post_meta($object["id"])[$field_name];
}
function add_custom_fields() {
	$arr = array("baths", "beds", "size", "price", "showing");
	foreach($arr as &$value) {
		register_rest_field(
		'post', 
		$value, // New Field Name in JSON RESPONSEs
		array(
			'get_callback'    => 'get_custom_value', // Custom function name 
			'update_callback' => null,
			'schema'          => null,
			)
		);
	}
}
add_action( 'rest_api_init', 'add_custom_fields' );



