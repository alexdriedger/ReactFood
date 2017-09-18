import Analytics from 'mobile-center-analytics';

const DESTINATIONS = {
  TELEMETRY: 'MOBILE_CENTER',
  DEV: 'CONSOLE',
};

export const SEVERITY = {
  GENERAL: 'GENERTAL',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

/**
 * Log event
 * @param {string} description of event
 * @param {DESTINATIONS} destination of event. One of DESTINATIONS
 * @param {SEVERITY} severity of event. One of SEVERITY
 * @param {*} properties of event. Optional
 */
function _logEvent(description, destination, severity, properties) {
  if (!__DEV__ && destination === DESTINATIONS.TELEMETRY) {
    // Send telmetry
    Analytics.trackEvent(description, properties);
  } else if (__DEV__) {
    // Log to console while not in production
    switch (severity) {
      case SEVERITY.GENERAL:
        console.log('Description: ', description, '. Properties: ', properties);
        break;
      case SEVERITY.WARN:
        console.warn('Description: ', description, '. Properties: ', properties);
        break;
      case SEVERITY.ERROR:
        console.error('Description: ', description, '. Properties: ', properties);
        break;
      default:
        console.error('Trying to log event with SEVERITY that is not recognized. Use one of SEVERITY');
        break;
    }
  }
}

/**
 * Logs an event to the telemetry service
 * @param {string} description of event.
 * @param {*} properties of event. Limited to 5 key, value pairs. Optional
 * @param {SEVERITY} severity of event. One of SEVERITY
 */
export function logTelemetry(description, properties, severity = SEVERITY.GENERAL) {
  _logEvent(description, DESTINATIONS.TELEMETRY, severity, properties);
}

/**
 * Logs an event to the console for developers
 * @param {string} description of event.
 * @param {*} properties of event. Optional.
 * @param {SEVERITY} severity of event. One of SEVERITY
 */
export function logDev(description, properties, severity = SEVERITY.GENERAL) {
  _logEvent(description, DESTINATIONS.DEV, severity, properties);
}
