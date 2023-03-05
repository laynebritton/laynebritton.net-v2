import React, { FC } from 'react';
import { ResponsiveContent } from '../../components/ResponsiveContent/ResponsiveContent';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';

const EmailLink = 'mailto:laynebritton1998@gmail.com';

const Contact: FC = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_CONTACT);

  return (
    <ResponsiveContent>
      <br />

      <h2>
        Email:{' '}
        <a
          href={EmailLink}
          onClick={() => {
            TrackEvent(ANALYTICS_CONSTANTS.CLICK_MAILTO_EMAIL);
          }}
        >
          laynebritton1998@gmail.com
        </a>{' '}
      </h2>
      <br />
    </ResponsiveContent>
  );
};

export default Contact;
