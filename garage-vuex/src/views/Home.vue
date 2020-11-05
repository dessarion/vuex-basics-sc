<template>
  <div class="container">
    <h1>About app</h1>
    <p>
      This is a simple application for understanding Vuex logic. <br> In the car
      creation menu, you create a car and place it in the parking lot (cars from
      the parking lot will not be available after reloading the page).<br> Cars can
      be moved from the parking lot to the garage, cars in the garage will be
      available after reloading the page. (also every car in the garage can be
      removed)
      <a href="https://github.com/dessarion/vuex-basics-sc">Source code</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
