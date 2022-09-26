/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import html from "./index.html"

async function handleRequest(request) {
	return new Response(html, {
	  headers: {
		'content-type': 'text/html;charset=UTF-8',
	  },
	});
  }
  
  addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request));
  });
