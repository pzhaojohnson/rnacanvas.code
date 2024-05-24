import { version as VERSION } from '../package.json';

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

import { radialize } from '@rnacanvas/bases-layout';

import { Box } from '@rnacanvas/boxes';

import { DownloadableFile } from '@rnacanvas/utilities';

document.body.style.margin = '0px';
document.body.style.padding = '0px';

let app = new RNAcanvas();

app.domNode.style.width = '100vw';
app.domNode.style.height = '100vh';

app.appendTo(document.body);

window.VERSION = VERSION;

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

window.radialize = radialize;

window.Box = Box;

window.DownloadableFile = DownloadableFile;

console.log(`%cWelcome to RNAcanvas Code! (v${VERSION})`, 'font-weight: bold;');
console.log('%cA code-centric way of drawing nucleic acid structures...', 'font-weight: bold;');
