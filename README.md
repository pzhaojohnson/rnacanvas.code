# General Usage

RNAcanvas Code can be interacted with through the web browser console.

The web browser console can be opened with `Ctrl+Shift+J` (or `Cmd+Option+J` on Mac).

# Quickstart

### Drawing a structure

```typescript
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

```typescript
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

### Exporting the drawing

RNAcanvas Code supports exporting drawings in SVG format,
which can be opened in vector graphics softwares like Adobe Illustrator and Inkscape.

```typescript
// the outer HTML of the drawing is SVG XML that can be exported
var file = new DownloadableFile(app.drawing.outerHTML);

file.downloadAs('drawing.svg', { type: 'text/plain' });
```
