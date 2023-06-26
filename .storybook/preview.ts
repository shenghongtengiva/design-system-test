import { Preview, setup } from '@storybook/vue3'
import { createVuetify } from 'vuetify'
import { withThemeProvider } from './vuetify.theme-decorator'

const themes = {
  system: {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#040919',
      secondary: '#0C7CE6',
      error: '#FF0000',
      info: '#2196F3',
      success: '#72D8B4',
      warning: '#FFBA7B'
    }
  },
  tengiva: {
    dark: false,
    colors: {}
  }
}
setup((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'system',
      themes: {
        ...themes
      }
    }
  })
  app.use(vuetify)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  globalTypes: {
    platform: {
      description: 'Switch theme between platform',
      defaultValue: 'system',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Platform theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'system', title: 'System' },
          { value: 'tengiva', title: 'Tengiva' }
        ],
        // Change title based on selected value
        dynamicTitle: true
      }
    }
  },
  decorators: [withThemeProvider]
}

export default preview
