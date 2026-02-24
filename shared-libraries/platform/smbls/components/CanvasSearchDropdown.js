export const CanvasSearchDropdown = {
  scope: {},
  CaptionTitle: {
    Text: {
      text: (el, s) => s.searchTerm ? 'Search results' : 'Recent searches',
    },
  },
  ListInDropdown: {
    gap: 'Z',
    flow: 'y',
    margin: '- -Z2',
    onInit: async (el, s) => {
      const fuse = await import('fuse.js')
      const Fuse = fuse.default

      const fuseOptions = {
        isCaseSensitive: false,
        shouldSort: true,
        findAllMatches: true,
        includeScore: true,
        threshold: 0.3,
        keys: [
          "key",
          "title",
          "code",
        ]
      }

      function mapBucketToItems(bucketObj, type) {
        return Object.values(bucketObj).map(item => ({
          key: item.key,
          title: item.title || '',
          code: item.code || '',
          type,
        })).filter(v => v.key)
      }

      const typesArr = el.parent.props.typesToIndex || ['components', 'pages', 'functions', 'state', 'files']
      const searchItems = typesArr.flatMap(
        bucket => mapBucketToItems(el.getSchema(bucket), bucket)
      )

      el.scope.fuse = new Fuse(searchItems, fuseOptions)
    },
    children: (el, s) => {
      if (!s.searchTerm) {
        return s.recents
      }

      const fuse = el.scope.fuse

      function searchAll(query) {
        const results = fuse.search(query);

        return results.map(r => ({
          key: r.item.key,
          title: r.item.title,
          code: r.item.code,
          type: r.item.type, // component / page / function
          score: r.score,
        }))
      }

      const result = searchAll(s.searchTerm)
      return result
    },
    childrenAs: 'state',
    childExtends: 'CanvasSearchItem',
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
    padding: 'Z1 A',
    minWidth: 'G2',
  },
};