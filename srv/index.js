import express from 'express';

export default (app) => {
  app.use(express.json());

  // app.use(express.static('dist'));
  //
  // app.get('/foo', (req, res) => {
  //   res.json({msg: 'foo'});
  // });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
};
