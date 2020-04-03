<template>
  <v-app id="inspire">
    <AppBar />
    <v-content>
      <v-container class="reg-container" fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
      <!--  <div class="footer">
        <p>Premerica</p>
        <p>
          <a href="#">Privacy</a>
          <a href="#">Important Disclosures</a>
          <a href="#">Terms & Condidtion</a>
        </p>
        <p>@2020 Premerica www.premerica.com</p>
      </div>-->
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar';
export default {
  name: 'App',
  components: {
    AppBar
  }
};
</script>
<style lang="scss">
#inspire {
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
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
