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
</head>
  <body>
    <div id="app"></div>
  </body>
<script>
  (function(){
    document.write(`<style>.page__content \{ min-height: ${window.innerHeight}px }</style>`);
  })();
</script>
<script async src="/wp-content/themes/bpevents/assets/bundle.js"></script>
  <?php wp_footer();?>
</html>
