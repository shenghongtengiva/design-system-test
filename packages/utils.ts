import type { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends Record<string, any>>(main: T) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main]) {
      app.component(comp.name, comp)
    }
  }
  return main as SFCWithInstall<T>
}
