<template>
  <v-row class="responsive-page-layout">
    <v-col class="d-flex flex-column">
      <section class="responsive-header">
        <h1
          :class="co_titleAccent"
          class="text-center display-1"
          v-text="title"
        />
      </section>
      <section class="responsive-body">
        <v-col cols="12">
          <slot name="default" />
        </v-col>
      </section>
      <v-spacer />
      <section class="responsive-footer">
        <slot name="bottom" />
      </section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'pri-responsive-page-layout',
  props: {
    title: {
      type: String
    },
    titleAccent: {
      type: String
    }
  },
  computed: {
    co_titleAccent() {
      return this.titleAccent && typeof this.titleAccent === 'string'
        ? { [`${this.titleAccent}--text`]: true }
        : {};
    }
  }
};
</script>

<style lang="scss">
.responsive-page-layout {
  height: 100%;
}
</style>
