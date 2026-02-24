export const StateDesignElement = {
  extends: 'DesignElement',
  href: '/docs/{{ categoryType }}',
  margin: 'B -Z2 -Z2',
  gap: 'Y2',
  maxWidth: 'F_default',
  style: {
    cursor: 'alias',
  },
  WiderButton: (el, s) => {
    const COLOR_MAPING = {
      animation: 'default',
      selector: 'default',
      media: 'default'
    }

    const ICON_MAPING = {
      animation: 'animationsAlt',
      selector: 'click',
      media: 'deviceMobile'
    }

    return {
      theme: COLOR_MAPING[s.categoryType] || s.categoryType,
      icon: (ICON_MAPING[s.categoryType] || s.categoryType) + 'Outline'
    }
  },
  Hgroup: {
    H: null,
    P: {
      text: null,
      childProps: {
        tag: 'span',
      },
      children: [
        'Property of ',
        {
          text: '{{ category }}',
          props: {
            '@dark': {
              color: 'white',
            },
            '@light': {
              color: 'black',
            },
          },
        },
      ],
    },
  },
};