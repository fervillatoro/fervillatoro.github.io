
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-QCUQFOPS.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7NSBGF5C.js"
    ],
    "route": "/invitations/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26447, hash: 'b2d20846ee78c4b81a0ca9d07fc739d361e4ad55dfb1144808747f76b8ccad13', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22205, hash: '8817ffd1cdc19ef92586ba329f028a6878148cc29b65e1546ac9d7dc9ea6fde4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32327, hash: '262143870e7fd81e514ad7b3af148e4500a8e9fb738cd04026ecb28309be6ac6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JWU4A3JI.css': {size: 232366, hash: 'WA3C/+u1hcI', text: () => import('./assets-chunks/styles-JWU4A3JI_css.mjs').then(m => m.default)}
  },
};
