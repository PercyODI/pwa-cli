const express = require('express') //import express from 'express';
const app = express();
// export default (app) => {
  app.use(express.json());

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
  app.listen(process.env.PORT || 8080, () => console.log("Listening on port 8080"))
