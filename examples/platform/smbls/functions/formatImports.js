export const formatImports = function formatImports (code) {
  return code.replace(
    // eslint-disable-next-line prefer-named-capture-group
    /import\s*\{\s*\n\s*([^}]+)\n\s*\}\s*from\s*['"]([^'"]+)['"]/gu,
    (_, imports, source) => {
      const cleanedImports = imports.trim()
      return `import { ${cleanedImports} } from '${source}'`
    }
  )
}
