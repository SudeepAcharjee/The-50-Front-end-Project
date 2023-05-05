import { docReady } from './utils';
import detectorInit from './detector';
import swiperInit from './swiper';
import isotopeInit from './isotope';
import glightboxInit from './glightbox';
import cursorInit from './cursor';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(swiperInit);
docReady(glightboxInit);
docReady(isotopeInit);
docReady(cursorInit);
