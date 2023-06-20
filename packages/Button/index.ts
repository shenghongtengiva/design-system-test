import type { App, Plugin } from 'vue';
import Button from './src/index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    // eslint-disable-next-line vue/no-reserved-component-names, vue/multi-word-component-names
    app.component('Button', Button);
  },
};

export { Button };