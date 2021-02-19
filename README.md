# Todo

This is a very simple todo application built with Nhost, RedwoodJS, and GraphQL subscriptions used to showcase the work done [here](https://github.com/redwoodjs/redwood/pull/1799)

- The GraphQL API endpoint is configured in `./redwood.toml` with `apiProxyPath`.  
- The use of subscriptions can be found [here](https://github.com/nhost-examples/nhost-redwoodjs-realtime/blob/master/web/src/components/TodosCell/TodosCell.js#L3)

### Setup

RedwoodJS uses yarn. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Start the app

```terminal
yarn redwood dev web
```

Your browser should open automatically to `http://localhost:8910` to see the web app.
