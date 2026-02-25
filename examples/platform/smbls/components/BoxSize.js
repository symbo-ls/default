export const BoxSize = {
  Flex: {
    gap: 'B',
    flow: 'y',
    childExtends: 'BoxSizeRow',
    children: [
      {
        type: 'Width'
      },
      {
        type: 'Height'
      }
    ],
    childrenAs: 'state'
  }
}
