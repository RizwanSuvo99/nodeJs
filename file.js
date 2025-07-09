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

fs.writeFile('test.json', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File write is successfull');
  }
});

fs.readFile('./test.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let obj = JSON.parse(data);
    console.log(obj);
  }
});
