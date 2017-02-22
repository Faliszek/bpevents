<?php

function site_info() {
    $data = new stdClass();
    $data->siteUrl = get_site_url();
    $data->homePage = get_option( 'page_on_front' );
    $data->referencesPage = get_page_by_title( 'referencje' )->ID;
    $data->contactPage = get_page_by_title( 'kontakt' )->ID;
    $data->eqPage = get_page_by_title( 'sprzet' )->ID;

    return json_encode($data, false);
}
add_action( 'rest_api_init', function () {
    register_rest_route( 'defines/v2', '/info', array(
        'methods' => 'GET',
        'callback' => 'site_info',
    ) );
} );
