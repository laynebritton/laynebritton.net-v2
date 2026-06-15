import mixpanel from 'mixpanel-browser';

const CURRENT_ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || '';
const ANALYTICS_TOKEN = process.env.REACT_APP_MIXPANEL_ANALYTICS_TOKEN || '';

let initialized = false;

const IsProductionEnvironment = () => CURRENT_ENVIRONMENT === 'prod';

export const InitializeAnalytics = () => {
  if (initialized || !IsProductionEnvironment() || !ANALYTICS_TOKEN) {
    return;
  }

  mixpanel.init(ANALYTICS_TOKEN, { api_host: 'https://api.mixpanel.com' });
  initialized = true;
};

export const TrackEvent = (event: string) => {
  if (!initialized) {
    return;
  }

  mixpanel.track(event, { environment: CURRENT_ENVIRONMENT });
};
