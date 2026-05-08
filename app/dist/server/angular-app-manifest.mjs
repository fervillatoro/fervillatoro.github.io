
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
    'index.csr.html': {size: 26456, hash: '3dc9a17d1c28892a4807967a0514d58e15e5246a6b84275e0e54c966b4a33613', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22214, hash: '7507e4816d5f324c21548c7fecf19ae3c036308958482119a8222b9305c11ffb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32336, hash: 'df0abdf051d4000f6081a0992323ebb8a48012cfbb3841e4b05569bbe010b58c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JWU4A3JI.css': {size: 232366, hash: 'WA3C/+u1hcI', text: () => import('./assets-chunks/styles-JWU4A3JI_css.mjs').then(m => m.default)}
  },
};
