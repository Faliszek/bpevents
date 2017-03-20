<footer>
    <div class="footer container">
        <div class="footer-content row">
            <div class="col-sm-5">
                <div class="contact-block">
                    <div class="text">
                        <?php if ( is_active_sidebar( 'footer-contact' ) ) : ?>
                            <?php dynamic_sidebar( 'footer-contact' ); ?>
                        <?php endif; ?>
                    </div>
                </div>

            </div>
            <div class="col-sm-3">
                <div class="site-map">
                    <?php if ( is_active_sidebar( 'footer-links' ) ) : ?>
                        <?php dynamic_sidebar( 'footer-links' ); ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-contact">
                    <?php if ( is_active_sidebar( 'footer-contact-form' ) ) : ?>
                        <?php dynamic_sidebar( 'footer-contact-form' ); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="footer-social">

        </div>
    </div>


</footer>
</body>
</html>