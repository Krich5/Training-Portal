(function () {
  const VERSION = 'v1';
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwawMz0Vgg4PSp7sZ0cWCYkEWtEL_fDunaimL5MbmjxC05QIshFdmPcedH0y6Gctu_V/exec';
  const ADMIN_TOKEN = 'CXASTrainingPortal25';
  const ADMIN_PASS = 'cooladmin';
  const BRAND = 'CXAS Training Portal';
  const TIMEZONE = 'America/New_York';

  window.APP_CONFIG = {
    VERSION,
    SCRIPT_URL,
    ADMIN_TOKEN,
    ADMIN_PASS,
    BRAND,
    TIMEZONE
  };

  if (typeof console !== 'undefined') {
    console.info('APP_CONFIG loaded:', {
      SCRIPT_URL: window.APP_CONFIG.SCRIPT_URL,
      ADMIN_TOKEN: window.APP_CONFIG.ADMIN_TOKEN ? 'set' : 'MISSING',
      ADMIN_PASS: window.APP_CONFIG.ADMIN_PASS ? 'set' : 'MISSING',
      VERSION: window.APP_CONFIG.VERSION
    });
  }
})();
