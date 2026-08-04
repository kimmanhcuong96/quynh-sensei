import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const astroCli = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));
const requestedCommand = process.argv[2] ?? 'dev';
const extraArguments = process.argv.slice(3);
const commands = requestedCommand === 'build' ? ['check', 'build'] : [requestedCommand];

for (const command of commands) {
  const exitCode = await new Promise((resolve) => {
    const child = spawn(process.execPath, [astroCli, command, ...extraArguments], {
      stdio: 'inherit',
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
    });
    child.on('exit', (code) => resolve(code ?? 1));
  });
  if (exitCode !== 0) process.exit(exitCode);
}
