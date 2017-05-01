<?php

function get_image_by_slug( $slug )
{
    $args = array(
        'post_type' => 'attachment',
    );

    $images = get_posts($args);
    foreach ($images as $image) {
        if ($image->post_title == $slug) {
            return $image;
        }
    }
}
