const StyleDictionary = require('style-dictionary').default
const { register } = require('@tokens-studio/sd-transforms')

register(StyleDictionary, {
  excludeParentKeys: true,
})

const sd = new StyleDictionary({
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
})

sd.buildAllPlatforms()
