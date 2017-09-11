const DESTINATIONS = {
  TELEMETRY: 'MOBILE_CENTER',
  DEV: 'CONSOLE',
};

const SEVERITY = {
  GENERAL: 'GENERTAL',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

/**
 * Log event
 * @param {string} description of event
 * @param {string} destination of event. One of DESTINATIONS
 * @param {string} severity of event. One of SEVERITY
 * @param {*} properties of event. Optional
 */
function _logEvent(description, destination, severity, properties) {
  if (!__DEV__ && destination === DESTINATIONS.TELEMETRY) {
    // Send to telmetry
  } else {
    // Log to console
    const logString = `Description: ${description}. Properties: ${properties}`;
    switch (severity) {
      case SEVERITY.GENERAL:
        console.log(logString);
        break;
      case SEVERITY.WARN:
        console.warn(logString);
        break;
      case SEVERITY.ERROR:
        console.error(logString);
        break;
      default:
        console.error('Trying to log event with SEVERITY that is not recognized. Use one of SEVERITY');
        break;
    }
  }
}

/**
 * Logs an event to the telemetry service
 * @param {*} description of event.
 * @param {*} severity of event. One of SEVERITY
 * @param {*} properties of event. Limited to 5 key, value pairs
 */
export function logTelemetry(description, severity, properties) {
  _logEvent(description, DESTINATIONS.TELEMETRY, severity, properties);
}

export function logDev(description, severity, properties) {
  _logEvent(description, DESTINATIONS.DEV, severity, properties);
}
