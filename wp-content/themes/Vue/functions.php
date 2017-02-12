<?php

function vue_setup(){
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );

    //KONTAKT FOOTER
    register_sidebar( array(
        'name'          => __( 'Kontakt footer', 'Vue' ),
        'id'            => 'footer-contact',
        'description'   => __( 'Dane kontaktowe w footerze', 'Vue' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
    //FORMULARZ KONTAKTPWY
    register_sidebar( array(
        'name'          => __( 'Formularz kontaktowy', 'Vue' ),
        'id'            => 'footer-contact-form',
        'description'   => __( 'Formularz kontaktowy w stopce', 'Vue' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    //FORMULARZ KONTAKTPWY
    register_sidebar( array(
        'name'          => __( 'Linki w footerze', 'Vue' ),
        'id'            => 'footer-links',
        'description'   => __( 'Linki w w stopce strony', 'Vue' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    //FORMULARZ KONTAKTPWY
    register_sidebar( array(
        'name'          => __( 'Social media', 'Vue' ),
        'id'            => 'social-icons',
        'description'   => __( 'Linki społecznościowe w w stopce strony', 'Vue' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'Vue' ),
    ) );
}
function vue_js() {
    wp_enqueue_script( 'vue-js', get_template_directory_uri() . '/js/bundle.js', array('jquery'), NULL, true);
}

function vue_css() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0.0' );
    wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css', array(), '1.0.0' );

}
function vue_load_controllers(){
    require_once('controllers/controllers.php');
}
add_action( 'after_setup_theme', 'vue_setup' );
add_action( 'wp_enqueue_scripts', 'vue_js' );
add_action( 'wp_enqueue_scripts', 'vue_css' );
add_action( 'wp', 'vue_load_controllers');

