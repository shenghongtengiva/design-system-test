import type { App } from 'vue'
import components from './components'

export * from './components'

const install = function (app: App) {
  components.forEach((component) => {
    app.use(component as unknown as { install: () => any })
  })
}

export default {
  install
}
