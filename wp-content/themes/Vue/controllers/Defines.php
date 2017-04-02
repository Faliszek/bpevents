<?php
define('SITE_URL', get_site_url());

function site_info() {
    $data = new stdClass();
    $data->siteUrl = constant('SITE_URL');

    $data->homePage = get_option( 'page_on_front' );
    $data->referencesPage = get_page_by_title( 'referencje' )->ID;
    $data->contactPage = get_page_by_title( 'kontakt' )->ID;
    $data->galleryPage = get_page_by_title( 'galeria' )->ID;

    $data->routes = set_routes();
    return json_encode($data, false);
}

function set_routes(){
    $routes = array();
    $args = array(
        'sort_order' => 'asc',
        'sort_column' => 'post_title',
        'hierarchical' => 1,
        'exclude' => '',
        'include' => '',
        'meta_key' => '',
        'meta_value' => '',
        'authors' => '',
        'child_of' => 0,
        'parent' => -1,
        'exclude_tree' => '',
        'number' => '',
        'offset' => 0,
        'post_type' => 'page',
        'post_status' => 'publish'
    );
    $pages = get_pages($args);
    foreach ($pages as $page){
        $route = new stdClass();
        $route->ID = $page->ID;
        $route->name = strtolower($page->post_title);
        $route->link = get_page_link($page->ID);
        $route->path = str_replace(constant('SITE_URL'), '', $route->link);
        $route->component = get_field('layout', $page->ID);
        $route->meta_title = get_field('seo_title', $page->ID);
        $route->meta_desc = get_field('seo_desc', $page->ID);
        array_push($routes, $route);
    }
    return $routes;
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'defines/v2', '/contact-form', array(
        'methods' => 'GET',
        'callback' => 'contact_form',
    ) );
} );


add_action( 'rest_api_init', function () {
    register_rest_route( 'defines/v2', '/info', array(
        'methods' => 'GET',
        'callback' => 'site_info',
    ) );
} );
