<!-- <template>
  <v-layout text-center wrap>
    <h2 class="headline mb-3">
      Protect your account with Two-Factor Authentication
    </h2>
  </v-layout>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss">
.responsive-page-layout {
  height: 100%;
}
</style> -->
<template v-slot:footer>
  <footer class="footer-wrap">
    <div class="logo">
      <h6>Primerica</h6>
    </div>
    <div class="footer-list">
      <ul>
        <li>
          <a
            href="http://www.primerica.com/public/privacy/privacy_notices.html"
            target="_blank"
            >Privacy</a
          >
        </li>
        <li>
          <a
            href="http://www.primerica.com/public/primerica_disclosures.html"
            target="_blank"
            >Important Disclosures</a
          >
        </li>
        <li>
          <a
            href="http://www.primerica.com/public/terms_conditions.html"
            target="_blank"
            >Terms &amp; Conditions</a
          >
        </li>
      </ul>
    </div>
    <div class="copy-right">
      &copy;2018 Primerica www.primerica.com
    </div>
  </footer>
</template>

<script>
export default {};
</script>
