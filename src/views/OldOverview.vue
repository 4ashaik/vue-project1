<template>
  <div>
    <h1>Old overview</h1>
  <ul>
  <li><router-link to="rick">Rick</router-link></li>
  <li><router-link to="morty">Morty</router-link></li>
</ul>
  <div>
    <router-view />
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "OldOverview",
  components: {
  },
};
</script>
