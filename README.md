# laynebritton.net

My personal home page and portfolio. Built from scratch with React + TypeScript
(Create React App) and React Bootstrap, with a single-page, anchor-navigated
layout covering an intro, resume, projects, and contact info.

Check it out at [laynebritton.net](https://laynebritton.net).

## Tech stack

- React 18 + TypeScript
- React Bootstrap / Bootstrap 5 for layout and components
- Framer Motion for subtle animation
- Mixpanel for analytics
- Playwright for end-to-end tests

## Development

```bash
npm install
npm start        # run the dev server at http://localhost:3000
npm run build    # production build to ./build
npm test         # unit tests (react-scripts / jest)
npm run test:e2e # Playwright end-to-end tests
npm run lint     # eslint
npm run format   # prettier
```

### Environment

Analytics and environment configuration are read from `.env` (gitignored). See
`.env.example` for the expected variables:

- `REACT_APP_ENVIRONMENT` — set to `prod` to enable analytics
- `REACT_APP_MIXPANEL_ANALYTICS_TOKEN` — Mixpanel project token

## Analytics

This project uses Mixpanel to track key events (page views and outbound link
clicks) so I can understand how the site is used and what to improve over time.
Tracking is only initialized when `REACT_APP_ENVIRONMENT` is `prod` and a token
is present, so local development and tests never emit events.

## Deployment

The site is deployed via the GitHub Actions workflow in
[.github/workflows](.github/workflows). `npm run build` produces the static
bundle that is served in production.
