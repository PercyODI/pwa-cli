const express = require('express'); // import express from 'express';
const enforce = require('express-sslify');

const app = express();

// export default (app) => {
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
} else {
  console.log('Not enforcing HTTPS');
}

app.use(express.static('dist'));
//
// app.get('/foo', (req, res) => {
//   res.json({msg: 'foo'});
// });
//
// app.post('/bar', (req, res) => {
//   res.json(req.body);
// });
// };
const port = process.env.PORT || 443;
app.listen(port, () => console.log(`Listening on port ${port}`));
