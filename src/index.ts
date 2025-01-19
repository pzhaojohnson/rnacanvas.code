import { version as VERSION } from '../package.json';

import { docs } from './docs';

import { assistant } from './assistant';

import { RNAcanvas } from '@rnacanvas/app-object';

import { consecutivePairs } from '@rnacanvas/base-pairs';

import { parseDotBracket } from '@rnacanvas/base-pairs';

import { Centroid } from '@rnacanvas/layout';

import { Direction } from '@rnacanvas/layout';

import { shift } from '@rnacanvas/layout';
import { rotate } from '@rnacanvas/layout';

import { flipX, flipY } from '@rnacanvas/layout';
import { flipSelfX, flipSelfY } from '@rnacanvas/layout';

import { straighten, linearize } from '@rnacanvas/layout';
import { stemmify } from '@rnacanvas/layout';

import { circularize, round } from '@rnacanvas/layout';

import { untangle } from '@rnacanvas/layout';

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

(window as any).VERSION = VERSION;

(window as any).docs = docs;

(window as any).assistant = assistant;

// make the app object accessible globally
(window as any).app = app;

(window as any).consecutivePairs = consecutivePairs;

(window as any).parseDotBracket = parseDotBracket;

(window as any).Centroid = Centroid;

(window as any).Direction = Direction;

(window as any).shift = shift;
(window as any).rotate = rotate;

(window as any).flipX = flipX;
(window as any).flipY = flipY;

(window as any).flipSelfX = flipSelfX;
(window as any).flipSelfY = flipSelfY;

(window as any).straighten = straighten;
(window as any).linearize = linearize;

(window as any).stemmify = stemmify;

(window as any).circularize = circularize;
(window as any).round = round;

(window as any).untangle = untangle;

(window as any).Box = Box;

(window as any).DownloadableFile = DownloadableFile;

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
