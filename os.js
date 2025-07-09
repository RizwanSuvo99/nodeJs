const os = require('os');

const architectureOs = os.arch();
const cpuInfo = os.cpus();
const freeMemo = os.freemem();
const networkInterface = os.networkInterfaces();
const hostname = os.hostname();
const homeDirectory = os.homedir();
const osType = os.type();
const userInfo = os.userInfo();

console.log(userInfo);
