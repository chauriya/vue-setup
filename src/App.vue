<template>
  <v-app id="inspire">
    <AppBar />
    <v-content>
      <v-container class="reg-container" fluid>
        <router-view :key="$route.fullPath" />
        <Footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
    AppBar,
    Footer
  }
};
</script>
<style lang="scss">
#inspire {
  .reg-container {
    max-width: 500px;
  }
  .v-application--wrap {
    min-height: 100%;
  }
}
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
