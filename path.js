const path = require('path');

const filePath = __filename;
const directoryPath = __dirname;

const fileName = path.basename(filePath);
const directoryName = path.basename(directoryPath);
const extentionName = path.extname(fileName);

const pathObj = {
  dir: 'user/local',
  name: 'test',
  ext: '.js',
};
const pathFormate = path.format(pathObj);
const isAbsolutePath = path.isAbsolute(filePath);
const isAbsolutePath2 = path.isAbsolute('./math.js');

const joinPath = path.join('user', 'local', 'programming', 'test.js');
const resolvePath = path.resolve(__dirname, 'programming', 'test.js');
const currentPathObj = path.parse(filePath);

console.log(currentPathObj);
