import { h } from 'vue'
import StoryWrapper from './StoryWrapper.vue'

export const withThemeProvider = (storyFn, context) => {
  const themeName = context.globals.platform || 'system'
  console.log(themeName)

  const story = storyFn()
  return () => {
    return h(
      StoryWrapper,
      { theme: themeName },
      {
        story: () => h(story, { ...context.args })
      }
    )
  }
}
