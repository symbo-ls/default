export const ExportsInPublish = {
  extend: 'Flex',
  props: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'DomainItem',
    childrenAs: 'state',
    childProps: {
      align: 'start',
      Icon: {
        name: '{{ icon }}',
      },
      Hgroup: {
        H: {
          text: '{{ title }}',
        },
        P: {
          text: '{{ descr }}',
        },
      },
      Upgrade: {
        if: el => el.isFree(),
      },
      Select: {
        padding: 'X Y2',
        margin: '-W Y2 - auto',
        background: 'none',
        color: 'currentColor',
        onChange: (ev, el, s, ctx) => {
            const value = ev.target.value
            if (value) {
              s.update({
                action: value
              })
            }
          },
        childrenAs: 'props',
        childProps: {
          tag: 'option',
          attr: {
            selected: (el, s) => el.node.value === s.action,
          },
        },
        if: el => !el.isFree(),
        children: [
          {
            text: 'CLI',
          },
          {
            text: 'Zip',
          },
        ],
      },
      IconButton: {
        if: el => !el.isFree(),
        extends: [
          'CanvasButton',
          'Button',
        ],
        padding: 'Y2',
        margin: '-Y -Y2',
        icon: 'downloadOutline',
        gap: 'Y1',
        Icon: {
          order: 2,
          color: 'blue',
        },
      },
    },
    children: [
      {
        icon: 'terminal',
        title: 'Local files',
        descr: 'Download as local Javascript files',
      },
      {
        icon: 'html',
        title: 'HTML',
        descr: 'Download pre-rendered HTML',
      },
      {
        icon: 'jquery',
        title: 'jQuery',
        descr: 'Download files with jQuery runner',
      },
      {
        icon: 'react',
        title: 'React',
        descr: 'Download files with React runner',
      },
      {
        icon: 'sf assets',
        title: 'Webp',
        descr: 'Download files with jQuery runner',
      },
      {
        icon: 'icons',
        title: 'SVG',
        descr: 'Download files with React runner',
      },
    ],
  },
};