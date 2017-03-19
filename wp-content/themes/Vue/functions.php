<?php

function vue_email( $phpmailer ) {

        // Define that we are sending with SMTP
        $phpmailer->isSMTP();

        // The hostname of the mail server
        $phpmailer->Host = "poczta.o2.pl";

        // Use SMTP authentication (true|false)
        $phpmailer->SMTPAuth = true;

        // SMTP port number - likely to be 25, 465 or 587
        $phpmailer->Port = "465";

        // Username to use for SMTP authentication
        $phpmailer->Username = "pawlic7@o2.pl";

        // Password to use for SMTP authentication
        $phpmailer->Password = "kk0sQq";

        // Encryption system to use - ssl or tls
        $phpmailer->SMTPSecure = "ssl";

        $phpmailer->From = "pawlic7@tlen.pl";
        $phpmailer->FromName = "Pawel";
}
function vue_setup(){
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );

    //KONTAKT FOOTER
    register_sidebar( array(
        'name'          => __( 'Kontakt', 'Vue' ),
        'id'            => 'footer-contact',
        'description'   => __( 'Dane kontaktowe w footerze', 'Vue' ),
        'before_widget' => '',
        'after_widget'  => '',
//        'before_title'  => '<h2 class="widget-title">',
//        'after_title'   => '</h2>',
    ) );
    //FORMULARZ KONTAKTPWY
    register_sidebar( array(
        'name'          => __( 'Formularz kontaktowy', 'Vue' ),
        'id'            => 'footer-contact-form',
        'description'   => __( 'Formularz kontaktowy w stopce', 'Vue' ),
        'before_widget' => '',
        'after_widget'  => '',
    ) );

    //MAPA STRONY
    register_sidebar( array(
        'name'          => __( 'Mapa Strony', 'Vue' ),
        'id'            => 'footer-links',
        'description'   => __( 'Linki w w stopce strony', 'Vue' ),
        'before_widget' => '',
        'after_widget'  => '',
    ) );

    //FORMULARZ KONTAKTPWY
    register_sidebar( array(
        'name'          => __( 'Social media', 'Vue' ),
        'id'            => 'social-icons',
        'description'   => __( 'Linki społecznościowe w w stopce strony', 'Vue' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget'  => '</aside>',
//        'before_title'  => '<h2 class="widget-title">',
//        'after_title'   => '</h2>',
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

function vue_controllers_api(){
    require_once('controllers/controllers.php');
}

add_action( 'init' , 'vue_controllers_api');
add_action( 'after_setup_theme', 'vue_setup' );
add_action( 'wp_enqueue_scripts', 'vue_js' );
add_action( 'wp_enqueue_scripts', 'vue_css' );
add_action( 'phpmailer_init', 'vue_email' );

