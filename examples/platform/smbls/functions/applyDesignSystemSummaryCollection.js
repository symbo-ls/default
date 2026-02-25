export const applyDesignSystemSummaryCollection = function applyDesignSystemSummaryCollection () {
  const dataDesignSystem = this.getDesignSystem()
  const s = dataDesignSystem.COLOR ? dataDesignSystem : this.context.designSystem

  if (!s) return

  const {
    COLOR,
    THEME,
    TYPOGRAPHY,
    FONT,
    FONT_FAMILY,
    SPACING,
    ICONS,
    TIMING,
    CASES,
    GRIDS,
    MEDIA,
    DEVICES
  } = s

  if (!COLOR) return

  return [{
    icon: 'colorOutline',
    href: '/color',
    iconTheme: 'theme',
    title: 'colors',
    paragraph: 'Theming of an entire app',
    iconBackground: 'red',
    properties: [{
      property: 'Colors',
      value: COLOR && Object.keys(COLOR).length
    }, {
      property: 'Themes',
      value: THEME && Object.keys(THEME).length
    }]
  }, {
    icon: 'typographyOutline',
    href: '/typography',
    iconTheme: 'typography',
    title: 'typography',
    paragraph: 'Style a typed material',
    properties: [{
      property: 'Base size',
      value: TYPOGRAPHY && TYPOGRAPHY.base + 'px'
    }, {
      property: 'Ratio',
      value: TYPOGRAPHY && TYPOGRAPHY.ratio
    }, {
      property: 'Styles',
      value: TYPOGRAPHY && TYPOGRAPHY.styles && Object.keys(TYPOGRAPHY.styles).length
    }]
  }, {
    icon: 'spaceOutline',
    href: '/spacing',
    iconTheme: 'space',
    title: 'Spacing',
    paragraph: 'Manage sizing properties of a space',
    properties: [{
      property: 'Ratio',
      value: SPACING && SPACING.ratio
    }, {
      property: 'Templates',
      value: 'TBA'
    }]
  }, {
    icon: 'shape',
    href: '/shape',
    iconTheme: 'shape',
    title: 'shapes',
    paragraph: 'Design an outline to a chosen component',
    properties: [{
      property: 'HTML',
      value: '32'
    }, {
      property: 'SVG',
      value: 'TBA'
    }]
  }, {
    icon: 'iconsOutline',
    href: '/icons',
    iconTheme: 'color',
    title: 'Icons',
    paragraph: 'Label a role of subject with glyphs',
    properties: [{
      property: 'All',
      value: ICONS && Object.keys(ICONS).length
    }, {
      property: 'Fill',
      value: ICONS && Object.keys(ICONS).filter(v => v.toLowerCase().includes('fill')).length
    }, {
      property: 'Linear',
      value: ICONS && Object.keys(ICONS).filter(v => v.toLowerCase().includes('outline')).length
    }, {
      property: 'Colored',
      value: ICONS && Object.keys(ICONS).filter(v => v.toLowerCase().includes('colored')).length
    }]
  }, {
    icon: 'fontFace',
    href: '/font',
    title: 'Fonts',
    paragraph: 'Fonts and font families',
    properties: [{
      property: 'Fonts',
      value: FONT && Object.keys(FONT).length
    }, {
      property: 'Families',
      value: FONT_FAMILY && Object.keys(FONT_FAMILY).length
    }]
  }, {
    icon: 'clock',
    href: '/timing',
    iconTheme: 'icons',
    title: 'Timing',
    paragraph: 'Tokens for transitions and animations',
    properties: [{
      property: 'Timing base',
      value: TIMING && TIMING.base + 'ms'
    }, {
      property: 'Ratio',
      value: TIMING && TIMING.ratio
    }, {
      property: 'Transitions',
      value: 'TBA'
    }, {
      property: 'Animations',
      value: 'TBA'
    }]
  }, {
    icon: 'layout outline',
    href: '/grid',
    title: 'Grids',
    paragraph: 'Grid systems for consistant layout',
    properties: [{
      property: 'All grids',
      value: GRIDS && Object.keys(GRIDS).length
    }]
  }, {
    icon: 'boolean outline',
    href: '/cases',
    title: 'Cases',
    paragraph: 'Conditional cases of UA reused in properties',
    properties: [{
      property: 'All cases',
      value: CASES && Object.keys(CASES).length
    }]
  }, {
    icon: 'deviceMobile',
    href: '/media',
    title: 'Breakpoints',
    paragraph: 'Device breakpoints as media and container queries',
    properties: [{
      property: 'Breakpoints',
      value: MEDIA && Object.keys(MEDIA).length
    }, {
      property: 'Screens',
      value: DEVICES && Object.keys(DEVICES).length
    }]
  }, {
    icon: 'threeDots',
    href: '/sequence',
    title: 'Sequence',
    paragraph: 'Mapping system of generative sizing units',
    properties: [{
      property: 'Breakpoints',
      value: '8'
    }, {
      property: 'Screens',
      value: '3'
    }]
  }]
}
