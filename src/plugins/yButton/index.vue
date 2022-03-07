<template>
    <div class="yyy-button">
        <button class="inner-button">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'yButton',
    data() {
        return {}
    }
}
</script>


<style scoped>
.yyy-button {

}
.inner-button {
    color: #fff;
    border: none;
}
</style>