import type { AppLoadContext, EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { isbot } from 'isbot';
import { renderHeadToString } from 'remix-island';
import { Head } from './root';
import { themeStore } from '~/lib/stores/theme';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  _loadContext: AppLoadContext,
) {
  const callbackName = isbot(request.headers.get('user-agent') || '') ? 'onAllReady' : 'onShellReady';

  return new Promise<Response>((resolve, reject) => {
    let didError = false;

    const { pipe } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} />, {
      [callbackName]: () => {
        const { readable, writable } = new TransformStream();
        const writer = writable.getWriter();

        const encoder = new TextEncoder();
        const head = renderHeadToString({ request, remixContext, Head });

        writer.write(
          encoder.encode(
            `<!DOCTYPE html><html lang="en" data-theme="${themeStore.value}"><head>${head}</head><body><div id="root" class="w-full h-full">`,
          ),
        );

        const stream = new WritableStream({
          write(chunk) {
            writer.write(chunk);
          },
          close() {
            writer.write(encoder.encode(`</div></body></html>`));
            writer.close();
          },
          abort(reason) {
            writer.abort(reason);
          },
        });

        pipe(stream as any); // We know this is safe

        responseHeaders.set('Content-Type', 'text/html');
        responseHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
        responseHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

        resolve(
          new Response(readable, {
            status: didError ? 500 : responseStatusCode,
            headers: responseHeaders,
          }),
        );
      },
      onShellError(err) {
        reject(err);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    });
  });
}
