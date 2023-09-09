const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const sendPage = (request, response, page) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

const getIndex = (request, response) => sendPage(request, response, index);
const getPage2 = (request, response) => sendPage(request, response, page2);

module.exports = {
  getIndex,
  getPage2,
};
