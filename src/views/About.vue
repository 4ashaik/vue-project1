<template>
  <div class="home">
  <ul>
  <li><router-link to="coffee">Coffee</router-link></li>
  <li><router-link to="tea">Tea</router-link></li>
  <li><router-link to="milk">Milk</router-link></li>
</ul>
  <div>
    <router-view />
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    HelloWorld,
  },
};
</script>
