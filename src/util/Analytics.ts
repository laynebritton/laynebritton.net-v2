import mixpanel from 'mixpanel-browser';

const CURRENT_ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const ANALYTICS_TOKEN = process.env.REACT_APP_MIXPANEL_ANALYTICS_TOKEN;

export const InitializeAnalytics = () => {
  if (!IsProductionEnvironment()) {
    return;
  }

  if (ANALYTICS_TOKEN) {
    mixpanel.init(ANALYTICS_TOKEN);
  }
};

export const TrackEvent = (event: string) => {
  if (!IsProductionEnvironment()) {
    return;
  }

  mixpanel.track(event, { environment: CURRENT_ENVIRONMENT });
};

const IsProductionEnvironment = () => {
  console.log(CURRENT_ENVIRONMENT);
  console.log(ANALYTICS_TOKEN);
  if (CURRENT_ENVIRONMENT === 'prod') {
    return true;
  }
  console.log('this is not prod');
  return false;
};
