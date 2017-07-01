<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Lato|Raleway|Roboto|Slabo+27px" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i" rel="stylesheet">
  <?php wp_head(); ?>

  <script> var SERVER_DATA = <?php echo set_data();?></script>
</head>
  <body>
    <div id="app"></div>
    <div id="error-occurred"></div>
  </body>
<script>
  (function(){
    document.write(`<style>.content \{ min-height: ${window.innerHeight}px }</style>`);
  })();
</script>
  <?php wp_footer();?>
</html>
