
import React from 'react';
import { renderToString } from 'react-dom/server';
import DisplayUser from './src/components/DisplayUser';
import getFacts from './src/components/facts';
import * as express from 'express';

const displayUser = express();
app.get('**', (req, res) => {
  getFacts().then(facts => {
    const html = renderToString(<DisplayUser facts={facts} />);\
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
  });
});

export let ssrapp = functions.https.onRequest(app);
