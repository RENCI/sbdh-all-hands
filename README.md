# South Hub All-Hands

## Overview
This is the [website](https://southbigdatahub-events.org/) for the annual All-Hands event hosted by the South Big Data Innovation Hub.

The React application is built with create-react-app as a base and deployed on a Netlify server. The Semantic UI React library is used for UI components, with data for Speakers and Agenda sessions being pulled from Contentful using their GraphQL Content API.

___
## Deployment
This website is hosted on Netlify. There is a build script (see `package.json`) to prepare the site for production and deployment to Netlify once you have connected the repo to a Netlify domain.
> `$ yarn build`
___
## How to Contribute
If you would like to contribute to the development of this site, please propose your changes to the `master` branch via pull request(s). The `master` branch consists of what is currently live on the site so create your feature branches off of that.

To develop locally, you will need `yarn` package manager. Once cloned, execute `yarn` to install the dependencies. After this is complete, run `yarn start` from the project root to run the development server on localhost which is on port 3000 by default. You may need to refresh the browser window to view and test any saved changes to the source code.

You will also need two API keys from Contentful to get any agenda and speaker information to appear. Once you register for a free account on Contentful. You will need the Space ID and the Content ID for your content and then save them in a `.env` file. Make sure you don't upload that to your repo!

Create some content in Contentful so that there is data to pull in the GraphQL queries on these pages of the `src/components` folder: `Home.js`, `Agenda.js`, `Speaker.js`, and `SpeakerInfo.js`
___
## Resources
* [React](https://reactjs.org/)
* [Semantic UI React](https://react.semantic-ui.com/)
* [Contentful](https://www.contentful.com/)
    * [Contentful: GraphQL Content API](https://www.contentful.com/developers/docs/references/graphql/)
* [Luxon](https://moment.github.io/luxon/#/?id=luxon) (A replacement for, Moment.js, the popular library to help with date and time calculations)
* [Netlify](https://docs.netlify.com/?_ga=2.143967157.1464594570.1628696516-1753369940.1621636580)