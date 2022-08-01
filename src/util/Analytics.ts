import mixpanel from 'mixpanel-browser';

let CURRENT_ENVIRONMENT: string;
let ANALYTICS_TOKEN: string;

export const InitializeAnalytics = () => {
  CURRENT_ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || '';
  ANALYTICS_TOKEN = process.env.REACT_APP_MIXPANEL_ANALYTICS_TOKEN || '';

  if (!IsProductionEnvironment()) {
    return;
  }

  if (ANALYTICS_TOKEN) {
    mixpanel.init(ANALYTICS_TOKEN, { api_host: 'https://api.mixpanel.com' });
  }
};

export const TrackEvent = (event: string) => {
  if (!IsProductionEnvironment()) {
    return;
  }

  mixpanel.track(event, { environment: CURRENT_ENVIRONMENT });
};

const IsProductionEnvironment = () => {
  if (CURRENT_ENVIRONMENT === 'prod') {
    return true;
  }
  return false;
};
