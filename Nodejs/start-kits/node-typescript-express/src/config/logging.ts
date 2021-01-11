import { logging } from '../lib/logger/LogManager';

export function loadLogConfig(): void {
  logging
    .configure({
      minLevels: {
        '': 'info',
        core: 'warn',
      },
    })
    .registerConsoleLogger();
}
