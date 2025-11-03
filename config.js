(function () {
  const VERSION = 'v1';
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWJG3tt9oZLU0zm4vV8tF4q-BybwHzpxW9fHBkMT3l1D98sxq6hor60QJmjWWWASuj/exec';
  const ADMIN_TOKEN = 'CXASTrainingPortal25';
  const ADMIN_PASS = 'admin';
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
