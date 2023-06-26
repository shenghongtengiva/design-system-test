<template>
  <v-btn
    :color="props?.color"
    :variant="props?.variant || 'flat'"
    :size="props.size"
    :height="props?.height || 40"
    :disabled="props.disabled"
    :block="props.block"
  >
    asdasd
    <slot />
  </v-btn>
</template>

<script lang="ts" setup>
import { VBtn } from 'vuetify/lib/components/VBtn/index.mjs'
defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Button'
})

interface ButtonProps {
  color?: VBtn['color']
  variant?: VBtn['variant']
  size?: 'large'
  disabled?: boolean
  block?: boolean
  loading?: boolean
  height?: number | string
}

const props = defineProps<ButtonProps>()
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
