import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  defaultMeta: { service: 'common-lib' },
  transports: [
    new transports.Console(),
    // Add file transports or external logging services as needed
  ],
});
