export const Tag = {
  extends: 'LabelTag',
  props: (ev, el, s, ctx) => ({
    round: 'A',
    text: 'Tag',
    theme: 'field-static',
    order: -s.frequency,
    isActive: s.parent?.tags.indexOf(s.value) > -1,
    '.isActive': {
      theme: 'space',
    },
    onClick: (ev, el, s, ctx) => {
      const tags = s.parent?.tags || []
      console.log(tags, s.value)
      if (tags.indexOf(s.value) > -1) {
        console.log('tags:')
        console.log(tags)
        ctx.utils.removeValueFromArray(tags, s.value)
        console.log(tags)
      } else {
        tags.push(s.value)
      }
      console.log(tags, s.value)
      s.parent?.replace({
        tags
      })
    },
  }),
};