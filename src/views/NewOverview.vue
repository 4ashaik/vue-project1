<template>
  <div>
    <h1>New overview</h1>
  <ul>
  <li><router-link to="episode">episode</router-link></li>
  <li><router-link to="season">season</router-link></li>
  <li><router-link to="pilot">pilot</router-link></li>
</ul>
  <div>
    <router-view />
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NewOverview",
  components: {
  },
};
</script>
