export default {
  extends: 'Flex',
  theme: 'document',
  flow: 'column',
  minHeight: '100vh',
  width: '100%',
  padding: 'A B2 C2',
  boxSizing: 'border-box',
  gap: 'B',

  PageHeader: {
    extends: 'Flex',
    flow: 'row',
    align: 'center flex-start',
    gap: 'A',

    BackLink: {
      extends: 'Link',
      href: '/',
      textDecoration: 'none',
      flow: 'row',
      align: 'center center',
      gap: 'Z',

      BackIcon: {
        extends: 'Icon',
        name: 'arrowLeft',
        fontSize: 'A2'
      },

      BackLabel: {
        extends: 'Caption',
        text: 'Back'
      }
    },

    PageTitle: {
      extends: 'H1',
      text: 'Typography',
      margin: '0'
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    width: '100%',

    '@tablet': {
      columns: 'repeat(2, 1fr)'
    },

    '@mobile': {
      columns: '1fr'
    },

    H1Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H1',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H1',
        text: 'Heading One',
        margin: '0'
      }
    },

    H2Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H2',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H2',
        text: 'Heading Two',
        margin: '0'
      }
    },

    H3Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H3',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H3',
        text: 'Heading Three',
        margin: '0'
      }
    },

    H4Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H4',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H4',
        text: 'Heading Four',
        margin: '0'
      }
    },

    H5Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H5',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H5',
        text: 'Heading Five',
        margin: '0'
      }
    },

    H6Card: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'H6',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'H6',
        text: 'Heading Six',
        margin: '0'
      }
    },

    PCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'P',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'P',
        text: 'Paragraph text. The quick brown fox jumps over the lazy dog.',
        margin: '0'
      }
    },

    CaptionCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Caption',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Caption',
        text: 'Small label or hint text'
      }
    },

    HeadlineCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Headline',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Headline',
        text: 'Headline text'
      }
    },

    SubheadCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Subhead',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Subhead',
        text: 'Subheading text'
      }
    },

    FootnoteCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Footnote',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Footnote',
        text: '* Prices subject to change'
      }
    },

    StrongCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Strong',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Strong',
        text: 'Bold important text'
      }
    },

    ItalicCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'Italic',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'Italic',
        text: 'Emphasized italic text'
      }
    },

    UCard: {
      extends: 'Flex',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      flow: 'column',
      gap: 'Z2',

      Label: {
        extends: 'Caption',
        text: 'U',
        opacity: '0.5',
        fontFamily: 'monospace'
      },

      Preview: {
        extends: 'U',
        text: 'Underlined text'
      }
    }
  }
}
