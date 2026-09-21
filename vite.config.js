import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

function packageName() {
  try {
    return JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
      .name;
  } catch {
    return 'slides-as-code';
  }
}

/**
 * Project Pages need `/<repo>/`. Prefer BASE_PATH (CI sets this from the
 * repository name) so templated repos do not forget to edit this file.
 * Locally we fall back to the package.json name.
 */
function resolveBase() {
  const fromEnv = process.env.BASE_PATH?.trim();
  if (fromEnv) {
    return fromEnv.endsWith('/') ? fromEnv : `${fromEnv}/`;
  }
  return `/${packageName()}/`;
}

export default defineConfig({
  base: resolveBase(),
});
