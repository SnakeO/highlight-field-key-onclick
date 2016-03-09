<?php
/*
Plugin Name: ACF: Highlight "Field Key" onClick
Plugin URI: https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
Description: I hate double clicking the field name only to get the "Order #" highlighted along w/the field name. NO MORE!
Version: 1.0
Author: Internet
*/

add_action('admin_enqueue_scripts', function()
{
	wp_enqueue_script('highlight-acf-field-key-onclick', plugin_dir_url( __FILE__ ) . '/highlight-field-key-onclick.js', array('jquery'), '1.0.0');
});

?>
