import React, { FC } from 'react';
import { ResponsiveContent } from '../../components/ResponsiveContent/ResponsiveContent';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';
import { LinkedInLink } from '../Resume/Resume';

const EmailLink = 'mailto:layne@laynebritton.net';

const Contact: FC = () => {
  // TrackEvent(ANALYTICS_CONSTANTS.VIEW_CONTACT);

  return (
    <ResponsiveContent>
      <h3 id="contact" style={{ marginTop: '15vh' }}>
        Contact
      </h3>
      <h5>
        <a
          href={LinkedInLink}
          onClick={() => {
            TrackEvent(ANALYTICS_CONSTANTS.CLICK_LINKEDIN);
          }}
        >
          LinkedIn
        </a>
      </h5>
      <h5>
        <details>
          <summary>email</summary>
          <a
            href={EmailLink}
            onClick={() => {
              TrackEvent(ANALYTICS_CONSTANTS.CLICK_MAILTO_EMAIL);
            }}
          >
            layne@laynebritton.net
          </a>
        </details>
      </h5>
      <br />
    </ResponsiveContent>
  );
};

export default Contact;
