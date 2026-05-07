
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-7LWXHFIY.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25694, hash: 'bc04cebdb5ce72d5970ceafac0f2ec0bc62b1af129617d3e62161b0070cea699', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21348, hash: '3021852fe97789953ef0d7ba10336dcd961e7f9b42160d3f04bf55fe45a29793', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31345, hash: '30ba30693ef78ffce84088a0b730db06819653914fd148e3256a16710282ed2b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EAOLQZQ6.css': {size: 232362, hash: '1MPyu8rclvI', text: () => import('./assets-chunks/styles-EAOLQZQ6_css.mjs').then(m => m.default)}
  },
};
