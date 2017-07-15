<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>


  <meta charset="utf-8">
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Lato|Raleway|Roboto|Slabo+27px" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i" rel="stylesheet">
  <?php wp_head(); ?>
  <script> var SERVER_DATA = <?php echo set_data();?></script>
<!--  <link rel="preload" as="script" href="assets/bundle.js"-->
</head>
  <body>
    <div id="app"></div>
    <div id="error-occurred"></div>
  </body>
<script>
  (function(){
    document.write(`<style>.page__content \{ min-height: ${window.innerHeight}px }</style>`);
  })();
</script>
<script src="/wp-content/themes/Vue/assets/bundle.js"></script>
  <?php wp_footer();?>
</html>
