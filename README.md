# Quickstart

To draw a structure expressed in dot-bracket notation...

```typescript
// the structure to draw
var seq = 'AGAGUAGCAUUCUGCUUUAGACUGUUAACUUUAUGAACCACGCGUGUCACGUGGGGAGAGUUAACAGCGCCC';
var dotBracket = '(((((((....)))))))...(((((((((((.....(((((.......)))))..))))))))))).....';

app.drawDotBracket(seq, dotBracket);

// add some extra space around the drawn structure
// (and ensure that the drawing is big enough to house the drawn structure)
app.drawing.setPadding(500);

// fit the user's view of the drawing to the drawn structure
app.drawingView.fitToContent();
```
