const fs = require('fs');

const testObj = {
  name: 'rizwan',
  email: 'rizwanshuvo@gmail.com',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
};

const data = JSON.stringify(testObj);
