import bundle from './file.bundle.js';

bundle((file) => {
    // use the file like it was required
    const file = require('./file.js');
  });

bundle(callbackTwo);
bundle(callbackThree;)