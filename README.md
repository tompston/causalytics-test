## Assignment notes

- As you mentioned chart.js, using it here also
- Did not use `vuetify` because don't have the time to learn it. Instead using `tailwind` + a [small helper library](https://github.com/tompston/css-helpers) written by me that has helped me to manage css previously.
- The example includes an `fb` package for fetching data. Using it on the frontend client causes a bug because of the `url` module from node. To keep things simple and reduce dependencies, that fetch function can be written from scratch. 2 benefits come from this approach = simpler to understand what's happening and better security because of reduced reliance on external stuff.

### project structure

```
src
  css                 // all of the css, exported from index.css file
  ts                  // all reusable typescript stuff. For bigger projects this would be split up into more dirs
  components
      Main.vue         // holds all of the needed state management for fetching the endpoint
      ImpressionsChart // Component to which we pass data + labels to render the graph
      LoadingSpinner   // self explanatory
```

### Possible improvements

- It seems like there's some cursor pagination for the api. Didn't implement it because, well, don't want to.
- Colors for the graph are randomly generated. For test assignements this is ok, but would be nicer if they're presistent based on the label (this also removes the bug of changing colors if the dates are changed)
- There's some overflow for labels when hovering, in some screen dimensions. Should be fixed.
- Input elements can be refactored to be seperate components for this to be shorter and more reusable

<!--

<script setup lang="ts">
import { ref } from 'vue'
</script>

<template></template>

<style>
</style>

<div class="flex-center">
    <div class="max-width-1">content</div>
</div>



## debug grid
  <!-- <div class="font-mono fs-10 fixed bg-gray-800 text-white p-3 right-0 bottom-0 m-4">
    <div>start_date :: {{ start_date }}</div>
    <div>start_date_is_valid :: {{ dateIsValid(start_date) }}</div>
    <div>end_date :: {{ end_date }}</div>
    <div>end_date_is_valid :: {{ dateIsValid(end_date) }}</div>
    <div>dates_are_valid :: {{ startDateAndEndDatesAreValid(start_date, end_date) }}</div>
  </div> -->

-->
