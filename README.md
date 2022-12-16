# Sygma Landing Page

This repoitory holds the sources of [Sygma Landing Page](https://buildwithsygma.com/)

# Dependencies

This project requires `yarn`. You can find installation instructions [here](https://yarnpkg.com/getting-started/install).

# Running Locally

Fetch project dependencies:
```
$ yarn
```
Start development server:
```
$ yarn start
```

This command starts a local development server (localhost:3000) and opens up a browser window. Most changes are reflected live without having to restart the server.

# Building

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

This command is called be the automatic deployment script of this repository and content of a `build/` folder uploaded to the Cloudflare Page.

# Contributing

All contributions are welcomed! This is intended to be a living document and requires contributions of many to be maintained.

Please use GitHub Issues to propose any large changes and to facilitate discussion and questions regarding content and structure.

After making a PR you can see URL of the Preview deployment in the Checks section, so you can validate that 
