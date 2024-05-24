# General Usage

RNAcanvas Code can be interacted with through the web browser console.

The web browser console can be opened with `Ctrl+Shift+J` (or `Cmd+Option+J` on Mac).

# Quickstart

## Drawing a structure in dot-bracket notation

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
