<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <?php wp_head(); ?>
</head>
    <body>
      <div id="app">
        <router-view></router-view>
      </div>
    </body>
<?php wp_footer();?>
</html>
