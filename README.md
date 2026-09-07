# Schema Studio

A dependency-free, single-file database planning whiteboard for Microsoft Access schemas.

## Open it

Open `index.html` directly in a browser. No build step, server, package manager, or network connection is required.

## What it does

- Add table cards to a whiteboard-style canvas.
- Edit table names and fields inline.
- Choose from Microsoft Access column data types.
- Mark fields as primary keys.
- Import fields from another table while preserving a visible source badge.
- Automatically create a `1 → many` relationship when importing a source primary key.
- Create relationships manually with table, field, cardinality, and label controls.
- Drag cards around; relationship lines remain attached to the selected fields.
- Search and select tables from the inspector.
- Persist the current board in browser `localStorage`.
- Export the current schema as JSON.
- Import a previously exported JSON plan with the file picker; valid plans replace the current board after confirmation.
- Enter canvas-only mode to hide the top bar, inspector, and board toolbar (`F` or `Esc` to exit).
- Zoom the canvas with `−` / `＋` controls, `Ctrl` + trackpad pinch, or a two-finger pinch gesture.
- Export every table and relationship line on the board as a PNG image (with an SVG fallback if the browser cannot rasterize it).
- Use the example schema as a starting point or clear the board for a blank canvas.

The board is tuned for wide 16:9 screens and portrait 9:16 layouts. On narrow screens the inspector moves below the canvas and the board remains horizontally scrollable.

## Importing a JSON plan

Choose **Import** in the top bar and select a `.json` file exported by Schema Studio. The file is parsed and validated before it replaces the current board, so an invalid file leaves the existing plan untouched. This file-based workflow is also useful when a browser blocks local storage for pages opened directly from disk.

## Microsoft Access types included

Short Text, Long Text, Number, Large Number, Date/Time, Date/Time Extended, Currency, AutoNumber, Yes/No, OLE Object, Hyperlink, Attachment, Calculated, and Lookup Wizard.

## Keyboard shortcuts

- `A` — add a table
- `R` — add a relationship
- `F` — toggle canvas-only mode
- `+` / `-` — zoom in / out
- `0` — reset zoom to 100%
- `Esc` — close a modal or exit Connect mode
