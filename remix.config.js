/** @type {import('@remix-run/dev').AppConfig} */
export default {
    future: {
      // Enable future Remix features
      v3_fetcherPersist: true,
      v3_relativeSplatPath: true,
      v3_throwAbortReason: true,
    },
    ignoredRouteFiles: ['**/.*'], // ignore dotfiles
    serverModuleFormat: 'esm',
    serverPlatform: 'neutral',
    appDirectory: 'app',
    assetsBuildDirectory: 'public/build',
    publicPath: '/build/',
    serverBuildDirectory: 'build/server',
    server: false, // let Cloudflare handle the server
  };
  