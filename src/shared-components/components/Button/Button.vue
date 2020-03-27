<template>
  <v-btn
    :outlined="!primary"
    color="primary"
    depressed
    tile
    v-bind="$attrs"
    v-on="$listeners"
    class="text-capitalize"
  >
    <slot :name="slot" :slot="slot" v-for="slot in Object.keys($slots)" />
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'pri-button',
  props: {
    primary: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped></style>
