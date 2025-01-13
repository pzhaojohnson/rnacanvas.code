import { version as VERSION } from '../package.json';

import { docs } from './docs';

import { assistant } from './assistant';

import { RNAcanvas } from '@rnacanvas/app-object';

import { consecutivePairs } from '@rnacanvas/base-pairs';

import { parseDotBracket } from '@rnacanvas/base-pairs';

import { Centroid } from '@rnacanvas/bases-layout';

import { Direction } from '@rnacanvas/bases-layout';

import { shift } from '@rnacanvas/bases-layout';
import { rotate } from '@rnacanvas/bases-layout';

import { flipX, flipY } from '@rnacanvas/bases-layout';
import { flipSelfX, flipSelfY } from '@rnacanvas/bases-layout';

import { straighten, linearize } from '@rnacanvas/bases-layout';
import { stemmify } from '@rnacanvas/bases-layout';

import { circularize, round } from '@rnacanvas/bases-layout';

import { untangle } from '@rnacanvas/bases-layout';

import { Box } from '@rnacanvas/boxes';

import { DownloadableFile } from '@rnacanvas/utilities';

import { URLParamsHandler } from '@rnacanvas/code.url-params';

import { PasteHandler } from '@rnacanvas/paste-interface';

document.body.style.margin = '0px';
document.body.style.padding = '0px';

let app = new RNAcanvas();

app.domNode.style.width = '100vw';
app.domNode.style.height = '100vh';

app.appendTo(document.body);

// in Safari the `tabindex` HTML property is disabled by default
// (so key bindings are bound to the entire webpage here)
app.domNode.removeAttribute('tabindex');
[...app.keyBindings].forEach(kb => kb.owner = document.body);

window.VERSION = VERSION;

window.docs = docs;

window.assistant = assistant;

// make the app object accessible globally
window.app = app;

window.consecutivePairs = consecutivePairs;

window.parseDotBracket = parseDotBracket;

window.Centroid = Centroid;

window.Direction = Direction;

window.shift = shift;
window.rotate = rotate;

window.flipX = flipX;
window.flipY = flipY;

window.flipSelfX = flipSelfX;
window.flipSelfY = flipSelfY;

window.straighten = straighten;
window.linearize = linearize;

window.stemmify = stemmify;

window.circularize = circularize;
window.round = round;

window.untangle = untangle;

window.Box = Box;

window.DownloadableFile = DownloadableFile;

try {
  let url = new URL(document.URL);
  let urlParamsHandler = new URLParamsHandler(app);
  urlParamsHandler.handle(url.searchParams);
} catch (error) {
  console.warn(error);
  console.warn('Unable to process URL parameters.');
}

let pasteHandler = new PasteHandler(app);

// only handle paste events on the document body itself
// (let the app handle paste events that occur inside the app DOM node)
document.body.addEventListener('paste', event => event.target === document.body ? pasteHandler.handle(event) : {});

console.log(`%cWelcome to RNAcanvas Code! (v${VERSION})`, 'font-weight: bold;');
console.log('%cA code-centric way of drawing nucleic acid structures...', 'font-weight: bold;');
console.log('%cUse the docs() function to open the documentation for the app in a new tab.', 'font-weight: bold;');
console.log('%cUse the assistant() function to open the RNAcanvas AI assistant in a new tab.', 'font-weight: bold;');
