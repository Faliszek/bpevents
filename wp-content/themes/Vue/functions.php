<?php

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
function vue_configure_email($phpmailer){

    $options = get_option('smtp_configuration_name');
        // Define that we are sending with SMTP
        $phpmailer->isSMTP();
        // The hostname of the mail server
        $phpmailer->Host = $options['host'];
        // Use SMTP authentication (true|false)
        $phpmailer->SMTPAuth = true;
        // SMTP port number - likely to be 25, 465 or 587
        $phpmailer->Port = (string)$options['port'];
        // Username to use for SMTP authentication
        $phpmailer->Username = $options['login'];
        // Password to use for SMTP authentication
        $phpmailer->Password = $options['password'];
        // Encryption system to use - ssl or tls
        $phpmailer->SMTPSecure = $options['hash'];
        $phpmailer->From = $options['login'];
        $phpmailer->FromName = $options['name'];

}
//add_filter( 'rest_endpoints', 'vue_remove_endpoints');
add_action( 'init' , 'vue_controllers_api');
add_action( 'after_setup_theme', 'vue_setup' );
add_action( 'wp_enqueue_scripts', 'vue_js' );
add_action( 'wp_enqueue_scripts', 'vue_css' );
add_action( 'phpmailer_init', 'vue_configure_email' );
add_action( 'wp_ajax_send_mail', 'send_mail' );
add_action( 'wp_ajax_nopriv_send_mail', 'send_mail' );
//add_action( 'wp_ajax_siteWideMessage', 'send_mail' );


