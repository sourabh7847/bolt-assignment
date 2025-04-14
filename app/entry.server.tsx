import type { AppLoadContext, EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderHeadToString } from 'remix-island';
import { Head } from './root';
import { themeStore } from '~/lib/stores/theme';

import * as ReactDOMServer from 'react-dom/server';

const { renderToReadableStream } = ReactDOMServer;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  _loadContext: AppLoadContext,
) {
  const isBot = isbot(request.headers.get('user-agent') || '');

  try {
    const head = renderHeadToString({ request, remixContext, Head });
    const stream = await renderToReadableStream(<RemixServer context={remixContext} url={request.url} />, {
      bootstrapScripts: ['/build/entry.client.js'],
      // This ensures the stream waits for all the content on bots
      // and just shell for humans (better perf)
      [isBot ? 'onAllReady' : 'onShellReady']: () => {},
    });

    await stream.allReady;

    const encoder = new TextEncoder();

    const headChunk = encoder.encode(
      `<!DOCTYPE html><html lang="en" data-theme="${themeStore.value}"><head>${head}</head><body><div id="root" class="w-full h-full">`,
    );

    const tailChunk = encoder.encode(`</div></body></html>`);

    const fullStream = new ReadableStream({
      async start(controller) {
        controller.enqueue(headChunk);

        const reader = stream.getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }

        controller.enqueue(tailChunk);
        controller.close();
      },
    });

    responseHeaders.set('Content-Type', 'text/html');
    responseHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
    responseHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

    return new Response(fullStream, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', {
      status: 500,
    });
  }
}
