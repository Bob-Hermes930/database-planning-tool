import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('provides a canvas-only mode that hides the surrounding navigation chrome', () => {
  assert.match(html, /data-action="toggle-canvas-only"/);
  assert.match(html, /is-canvas-only/);
  assert.match(html, /function toggleCanvasOnly\s*\(/);
  assert.match(html, /event\.key === ['"]Escape['"]/);
});

test('keeps a touch-friendly exit control available in canvas-only mode', () => {
  assert.match(html, /id="canvasOnlyExitButton"/);
  assert.match(html, /class="canvas-only-exit"/);
  assert.match(html, /canvas-only-exit\.is-visible/);
});

test('provides zoom controls and gesture handlers for the canvas', () => {
  assert.match(html, /id="boardCanvasStage"/);
  assert.match(html, /data-action="zoom-in"/);
  assert.match(html, /data-action="zoom-out"/);
  assert.match(html, /function setZoom\s*\(/);
  assert.match(html, /event\.ctrlKey/);
  assert.match(html, /pinchState/);
});

test('exports the complete board as a downloadable image', () => {
  assert.match(html, /data-action="export-image"/);
  assert.match(html, /function exportImage\s*\(/);
  assert.match(html, /toBlob\s*\(/);
  assert.match(html, /schema-studio-board\.png/);
  assert.match(html, /state\.relationships/);
});

test('provides a browser file picker for importing JSON plans', () => {
  assert.match(html, /data-action="import-json"/);
  assert.match(html, /id="importJsonInput"/);
  assert.match(html, /type="file"/);
  assert.match(html, /accept="\.json,application\/json"/);
  assert.match(html, /function openJsonImportPicker\s*\(/);
  assert.match(html, /function importJsonFile\s*\(/);
});

test('validates an imported plan before replacing the current board', () => {
  assert.match(html, /function normalizeImportedState\s*\(/);
  assert.match(html, /Array\.isArray\(candidate\.tables\)/);
  assert.match(html, /Array\.isArray\(candidate\.relationships\)/);
  assert.match(html, /replace the current board/i);
});
