<!-- 
<template>
    <div class="my-jax">
        <span>i am jsx</span>
        <br />
        <slot></slot>
        <slot name="nav"></slot>
    </div>
</template>
-->

<script>
export default {
  data() {
    return {};
  },
  methods: {
      showLog() {
          console.log('showLog')
      }
  },
  render() {
    const { $slots } = this;
    return (
      <div class="my-jax" onClick={() => this.showLog()}>
        <span>i am jsx</span>
        <br />
        {$slots.default}
        {$slots.nav}
      </div>
    );
  },
};
</script>

<style scoped>
.my-jax {
  background-color: blanchedalmond;
  color: black;
  font-size: 16px;
}
</style>