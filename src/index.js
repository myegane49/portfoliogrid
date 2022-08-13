import './scss/style.scss';
import 'bootstrap';
import './ekko-lightbox';
import jQuery from 'jquery';

jQuery('.port-item').click(() => {
    jQuery('.collapse').collapse('hide');
});

jQuery(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    jQuery(this).ekkoLightbox();
});
