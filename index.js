const remote = require('electron').remote;
const main = remote.require('./main.js');


var button = document.createElement('button');
button.textContent = 'build site';
button.addEventListener('click', () => {
  main.buildSite();
}, false);
document.body.appendChild(button);
