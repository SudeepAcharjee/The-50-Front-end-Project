/* -------------------------------------------------------------------------- */
/*                                 Glightbox                                */
/* -------------------------------------------------------------------------- */

const glightboxInit = () => {
  if (window.GLightbox) {
    window.GLightbox({
      selector: '[data-glightbox]',
    });
  }
};
export default glightboxInit;
