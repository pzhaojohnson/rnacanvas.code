<b>RNAcanvas Code</b> is a web app for code-centric drawing of nucleic acid structures.

# Console Interaction

<b>RNAcanvas Code</b> can be interacted with using the web browser console.

The web browser console can be opened by pressing `Ctrl+Shift+I` (or `Cmd+Option+I` on Mac)
and switching to the console tab.

# Quickstart

### Drawing a structure

```javascript
// the structure to draw
var seq = 'AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC';
var dotBracket = '(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';

app.drawDotBracket(seq, dotBracket);

// add some extra space around the drawn structure
// (and ensure that the drawing is big enough for the drawn structure)
app.drawing.setPadding(500);

// fit the user's view of the drawing to the drawn structure
app.drawingView.fitToContent();
```

### Controlling the layout of bases

See the [full documentation](https://pzhaojohnson.github.io/rnacanvas.bases-layout/)
for the `@rnacanvas/bases-layout` package.

```javascript
// all bases in the drawing
var bases = [...app.drawing.bases];

// shift the bases by the given vector
shift(bases, { x: 500, y: -350 });

// rotate the bases by 120 degrees clockwise
rotate(bases, 2 * Math.PI / 3);

// represents the central point of all bases
let centroid = new Centroid(bases);

// recenter the bases at (912, 204)
centroid.set({ x: 912, y: 204 });
centroid.get(); // { x: 912, y: 204 }

// all base-pairs in the secondary structure of the drawing
var basePairs = [...app.drawing.secondaryBonds].map(sb => [...sb.basePair]];

// radialize the bases
// (the default layout for the bases in a structure)
radialize(bases, basePairs, { spacing: 20, basePairSpacing: 10, hairpinLoopSpacing: 10 });
```

### Editing and styling drawing elements

Attributes and properties of elements in the drawing of the app can be directly accessed and set.

```javascript
// make all U's lowercase and red
[...app.drawing.bases].filter(b => b.textContent === 'U').forEach(b => {
  b.textContent = 'u';
  b.setAttribute('fill', 'red');
});

// trace the sequence of the structure
[...app.drawing.primaryBonds].forEach(pb => {
  pb.set({
    basePadding1: 0,
    basePadding2: 0,
    attributes: {
      'stroke': 'blue',
      'stroke-width': '2',
      'stroke-linecap': 'round',
    },
  });
});

// give all secondary bonds a line thickness of 3 and rounded ends
[...app.drawing.secondaryBonds].forEach(sb => {
  sb.setAttributes({
    'stroke-width': '3',
    'stroke-linecap': 'round',
  });
});
```

### Exporting a drawing

Drawings can be exported in SVG format,
which can be opened (and edited further) in vector graphics softwares
like Adobe Illustrator and Inkscape.

```javascript
// the outer HTML of the drawing is SVG XML that can be exported
var file = new DownloadableFile(app.drawing.outerHTML);

file.downloadAs('drawing.svg', { type: 'text/plain' });
```
