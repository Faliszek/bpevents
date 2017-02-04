<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
    <nav class="main-nav">
        <div class="container">
            <div class="row">
                <div class="header-logo col-sm-3">
                    <h2>
                        <span class="b">B</span>
                        <span class="p">P</span>
                        events
                    </h2>
                </div>
                <div class="links col-sm-9">
                    <?php wp_nav_menu(array('menu'=> 'main'));?>
                </div>
            </div>

        </div>
    </nav>
    <div class="banner" >
        <div class="banner-container" style="background:url(<?php the_post_thumbnail_url();?>);background-size: cover;">
            <div class="mask-overlay"></div>
            <h1 class="page-title">DJ Kraków - do wynajęcia</h1>
            <p></p>
        </div>

    </div>
</header>

