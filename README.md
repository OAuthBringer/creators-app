# creators-app

## Getting started

###Installation and running locally

```
npm install
npm run dev
```

### Scanning with typescript

```
npm install -g typescript
tsc --watch 
```

### Running Tests

```
npm run test
```

### Storybook

```
npm run storybook
```

## Application Architecture
- This app is built using Next.js and tailwind-css using [brave/leo](https://github.com/brave/leo) 
- TypeScript is used for type-checking and improving developer experience.
- JSON Schema is used to define the structure of the data used in the app, and is used to generate TypeScript interfaces for all components and unit testing fixtures.

## Important Dependencies
- `next`: The core Next.js framework
- [brave/leo](https://github.com/brave/leo): Design/styling framework that implements tokens derived from the Brave design system that are importable as tailwind utility classes/and or svelte/react components. The tailwind utility classes match up with tokens defined in the Figma design schema in a 1:1 fashion.
- `json-schema-to-typescript`: A library for generating TypeScript interfaces from JSON Schema.  It is not explicitly required as a dependency for the app but is used as part as a stand alone data generation process.

## JSON Schema
- JSON Schema is used to define the structure of the data used in the app.
- It is used to generate TypeScript interfaces for all components and unit testing fixtures, ensuring that the data used in the app is always correctly typed.
- Schemas are located in the `src/public/schemas` directory and are dynamically generated using `json-schema-to-typescript`
- Though not implemented, JsonSchema was also chosen because it can be used to validate runtime HTTP request data as well as form-data interactions from client to server.

*Note*: One does not have to use JSONSchema for the typescript definitions if they do not want.  The app is perfectly fine using manually defined types, you will simply lose the majority of the value of the application architecture as it stands.

Taken as a whole, if the patterns setup using JsonSchema and their associated Types are followed and extended, developers should find that many of the common issues associated with React app development are absent as they will have strict type assurances accross a broad spectrum of application uses.

## State Management
- State is intended to be implemented in the Next.js `pages` directory.
- Components defined in the `components` directory should be defined as pure, stateless components as much as possible to improve reusability, performance, and to simplify unit testing..
- The final production state management mechanism for the application is currently TBD.  Right now a simple context provider is available but a more robust state management system may be desirable as the CRUD elements of the application are extended.

## Unit Testing
- Unit tests are currently located adjacent to their relevant components/source files, but could be moved to a  `__tests__` directory if desired..
- JSON Schema-generated TypeScript interfaces are used as the inputs for unit tests, ensuring that the data used in tests is always correctly typed.
- Jest is used as the testing framework.

## Directory Structure

- The project is organized to keep things as flat as possible and to avoid excessive nesting.
- Module exports are configured with the intent that every first order element (types, components, etc) should all be importable from no more than 1 folder level.
- The primary component directory is divided into directories by context:
  - AppElements contains all components that are used to create stateless "page" components, as well as their individual components.
  - PageElements contains core building blocks of building pages, such as cards and other generic component classes.
  - FormElements contains the building blocks for creating forms, such as text fields and other dropdown components.
