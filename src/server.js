import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import Result from './client/components/pages/Result/Result';
import Details from './client/components/pages/Details/Details';
import template from './index';

const server = express();

server.get('/', (req, res) => {
	const appString = renderToString(<App />);
	res.send(template({
		body: appString,
		title: 'OK'
	}));
});
server.get('/items/search', (req, res) => {
	const appString = renderToString(<Result />);
	res.send(template({
		body: appString,
		title: 'OK'
	}));
});
server.get('/items/:id([A-Z0-9]{12})', (req, res) => {
	const appString = renderToString(<Details />);
	res.send(template({
		body: appString,
		title: 'OK'
	}));
});

server.listen(8080);