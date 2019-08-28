# mke-js-contact-manager
VueJS SPA Example from the 8/27/2019 MKE JS Meetup

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue Directives

- `v-bind` Sets up a reactive element to data in the component
- `v-bind:key` Sets the unique key so the component can do an in place match: https://forum.vuejs.org/t/simple-clarification-of-when-using-key-with-v-for-is-appropriate-and-why/28966/2 "Tracks the node's identity". Part of what makes Vue super fast!

## Lifecycle Hooks Used
- `created()` Lifecycle hook that runs before HTML is injected or bound. We call our Vuex dispatch to load data here.

## Basic API Requests
- GET
- POST
- PUT
- GET (with ID)

## Basic JS API Requests
- show()
- index()
- store()
- update()

## How I Watch Request Lifecyle
- 0 Nothing Happend Yet
- 1 Loading
- 2 Successful
- 3 Failed

## Watchers
You can watch computed data or data in your component. When these change you can perform a function.

## Vuex Flow
1. Dispatch Action
2. Run Action
3. Call Mutation with new data
4. Get Data
5. Component re-renders data