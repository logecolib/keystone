## Feature Example - Custom Field

This project demonstrates how to create a custom field that allows users to select a number of stars.
It builds on the [Blog](../blog) starter project.

## Instructions

To run this project, clone the Keystone repository locally, run `yarn` at the root of the repository then navigate to this directory and run:

```shell
yarn dev
```

This will start the Admin UI at [localhost:3000](http://localhost:3000).
You can use the Admin UI to create items in your database.

You can also access a GraphQL Playground at [localhost:3000/api/graphql](http://localhost:3000/api/graphql), which allows you to directly run GraphQL queries and mutations.

## Stars field

The `stars` fields in the `stars-field` directory shows a custom field that validates that the value is between 0 and some maximum number of stars and shows a radio input to select the number of stars in the Admin UI. The backend for the field type is in `stars-field/index.ts` and the frontend is in `stars-field/views.tsx`.

## Try it out in Code Sandbox 🧪

You can play with this example online in a web browser using the free [codesandbox.io](https://codesandbox.io/) service. To launch this example, open the URL https://githubbox.com/keystonejs/keystone/tree/main/examples/custom-field. You can also fork this sandbox to make your own changes.
