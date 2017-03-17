const remote = require('electron').remote;
const main = remote.require('./main.js');


var buildButton = document.createElement('button');
buildButton.textContent = 'build site';
buildButton.addEventListener('click', () => {
  console.log('buildSite button clicked');
  main.buildSite();
}, false);
document.body.appendChild(buildButton);
