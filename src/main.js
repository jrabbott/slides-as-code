import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Notes from 'reveal.js/plugin/notes';

import 'reveal.js/reveal.css';
import 'reveal.js/theme/white.css';
import '@fontsource/atkinson-hyperlegible/400.css';
import '@fontsource/atkinson-hyperlegible/400-italic.css';
import '@fontsource/atkinson-hyperlegible/700.css';
import '@fontsource/atkinson-hyperlegible/700-italic.css';
import './style.css';

Reveal.initialize({
  hash: true,
  slideNumber: true,
  showNotes: false,
  transition: 'none',
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 2.0,
  plugins: [Highlight, Notes],
});
