<script setup lang="ts">
import { computed } from 'vue';
import { buttonProps } from './button';

const {disabled, type} = withDefaults(defineProps<buttonProps>(), {type: 'primary'})

const classList = computed(()=>['ec-button', `ec-button--${type}`])

</script>
<template>
    <button v-bind="{disabled}" :class="classList">
        <span
      v-if="$slots.default"
    >
      <slot />
    </span></button>
</template>

<style lang="scss"> 
@import "../../assets/styles/button.scss";
</style>