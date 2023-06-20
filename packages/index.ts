import type { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';

const DesignSystem: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default DesignSystem;

export * from './Button';