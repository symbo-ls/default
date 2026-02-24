'use strict'

const card = (label, children) => ({
  extends: 'Flex',
  theme: 'dialog',
  round: 'A',
  padding: 'A',
  flow: 'column',
  gap: 'Z',
  overflow: 'hidden',

  Label: {
    extends: 'Caption',
    text: label,
    opacity: '0.5',
    fontFamily: 'monospace',
    letterSpacing: '0.05em'
  },

  Preview: {
    extends: 'Flex',
    align: 'center center',
    padding: 'A',
    minHeight: 'C',
    ...children
  }
})

export default {
  extends: 'Flex',
  theme: 'document',
  flow: 'column',
  minHeight: '100dvh',
  padding: 'A B2 C2',
  boxSizing: 'border-box',
  gap: 'A',

  PageHeader: {
    extends: 'Flex',
    align: 'center flex-start',
    gap: 'A',
    marginBottom: 'A',
    BackLink: {
      extends: 'Link',
      href: '/',
      textDecoration: 'none',
      align: 'center center',
      gap: 'Z',
      BackIcon: { extends: 'Icon', name: 'arrowLeft', fontSize: 'A2' },
      BackLabel: { extends: 'Caption', text: 'Library' }
    },
    Info: {
      extends: 'Flex',
      flow: 'column',
      gap: 'W2',
      Title: { extends: 'H2', text: 'Forms & Input', margin: '0' },
      Sub: { extends: 'Caption', text: '15 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    FieldCard: card('Field', {
      Field: { Input: { placeholder: 'Enter value…' } }
    }),

    FieldCaptionCard: card('FieldCaption', {
      FieldCaption: {
        Caption: { text: 'Email address' },
        Field: { Input: { placeholder: 'you@example.com' } }
      }
    }),

    IconInputCard: card('IconInput', {
      IconInput: {
        Input: { placeholder: 'Search…' },
        Icon: { name: 'search' }
      }
    }),

    FixedNumberFieldCard: card('FixedNumberField', {
      FixedNumberField: {}
    }),

    CardNumberFieldCard: card('CardNumberField', {
      CardNumberField: {}
    }),

    SelectCard: card('Select', {
      Select: {
        childExtends: 'Option',
        ...[
          { text: 'Option A', value: 'a' },
          { text: 'Option B', value: 'b' },
          { text: 'Option C', value: 'c' }
        ]
      }
    }),

    SelectPickerCard: card('SelectPicker', {
      SelectPicker: {
        Select: {
          childExtends: 'Option',
          ...[
            { text: 'Nikoloza', value: 'nikoloza' },
            { text: 'Symbols', value: 'symbols' }
          ]
        }
      }
    }),

    SelectFieldCard: card('SelectField', {
      SelectField: {
        Select: {
          childExtends: 'Option',
          ...[
            { text: 'Select one…', value: '' },
            { text: 'Mazda', value: 'mazda' },
            { text: 'Toyota', value: 'toyota' }
          ]
        }
      }
    }),

    SelectHgroupCard: card('SelectHgroup', {
      SelectHgroup: {
        Hgroup: {
          H: { text: 'Language' },
          P: { text: 'Choose preferred language' }
        }
      }
    }),

    NumberPickerCard: card('NumberPicker', {
      NumberPicker: {}
    }),

    SearchCard: card('Search', {
      Search: { Input: { placeholder: 'Type to search…' } }
    }),

    SearchDropdownCard: card('SearchDropdown', {
      SearchDropdown: {}
    }),

    GroupCard: card('Group', {
      Group: { Title: { text: 'Section' } }
    }),

    TextareaIconButtonCard: card('TextareaIconButton', {
      TextareaIconButton: {
        Textarea: { placeholder: 'Write a message…' }
      }
    }),

    SubmitButtonCard: card('SubmitButton', {
      SubmitButton: { value: 'Submit' }
    })
  }
}
