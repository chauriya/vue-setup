<template>
  <v-app id="inspire">
    <AppBar />
    <v-content>
      <Registration />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import Registration from '../src/views/Registration';

export default {
  name: 'App',
  components: {
    AppBar,
    Registration
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
