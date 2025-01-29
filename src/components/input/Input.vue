<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { InputProps } from './input';

const props = withDefaults(defineProps<InputProps>(), {placeholder: 'Placeholder'})
const modelValue = defineModel<string>({default: ''})
const emit = defineEmits(['change'])

const { placeholder } = toRefs(props)

const classList = computed(()=>['ec-input'])

const handleChange = (event: Event) => {
  emit('change', (event.target as HTMLInputElement).value)
}
const inputHandler = (event: Event) => {
  let { value } = event.target as HTMLInputElement
  modelValue.value = value
}

</script>
<template>
  <div class="ec-input__wrapper">
    <div v-if="$slots.prepend" class="ec-input__prepend">
      <slot name="prepend" />
    </div>
  </div>
    <input :class="classList" :value="modelValue" :disabled="disabled" :placeholder="placeholder" @change="handleChange" @input="inputHandler"/>
    <div v-if="$slots.append" class="ec-input__append">
      <slot name="append" />
    </div>
</template>

<style lang="scss"> 
@import "../../assets/styles/input.scss";
</style>