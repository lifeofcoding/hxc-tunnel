const socketTunnel = require('../lib/api');

socketTunnel.connect('https://herokuapp.com', 'jimmythehacker', '80')
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });
