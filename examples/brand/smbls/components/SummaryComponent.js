export const SummaryComponent = {
  extends: [
    'Link',
    'ClickableItem',
    'DesignComponent',
  ],
  state: true,
  maxWidth: 'none',
  width: '100%',
  margin: '- - B1',
  fontWeight: '400',
  href: '{{ href }}',
};