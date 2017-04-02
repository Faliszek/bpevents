<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> onload="document.body.classList.add('loaded')">
<?php //get_header();?>
  <div id="app"></div>
<?php //get_footer();?>
<script>
  (function(){
    document.write(`<style>.content \{ min-height: ${window.innerHeight}px }</style>`);
  })();
</script>
</body>
<?php wp_footer();?>
</html>
