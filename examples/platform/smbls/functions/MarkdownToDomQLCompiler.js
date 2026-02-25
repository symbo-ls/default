export const MarkdownToDomQLCompiler = class MarkdownToDomQLCompiler {
  constructor () {
    this.lineCounter = 0
    this.sectionCounter = 0
  }

  compile (markdown, options = {}) {
    const {
      componentName = 'MarkdownComponent',
      containerProps = {
        flexFlow: 'column',
        gap: 'C1'
      }
    } = options

    const lines = markdown.split('\n')
    const result = {
      props: containerProps
    }

    let listItems = []
    let inList = false
    let codeBlock = false
    let codeContent = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmedLine = line.trim()

      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (codeBlock) {
          const codeKey = this.generateKey('Code')
          result[codeKey] = {
            tag: 'pre',
            Code: {
              tag: 'code',
              text: codeContent.join('\n')
            }
          }
          codeContent = []
          codeBlock = false
        } else {
          codeBlock = true
        }
        continue
      }

      if (codeBlock) {
        codeContent.push(line)
        continue
      }

      // Handle empty lines
      if (!trimmedLine) {
        if (inList && listItems.length > 0) {
          this.finalizeList(result, listItems)
          listItems = []
          inList = false
        }
        continue
      }

      // Handle headings
      if (trimmedLine.startsWith('#')) {
        if (inList) {
          this.finalizeList(result, listItems)
          listItems = []
          inList = false
        }

        const level = Math.min(trimmedLine.match(/^#+/)[0].length, 6)
        const text = trimmedLine.replace(/^#+\s*/, '')
        const headingKey = this.generateKey(`H${level}`)

        result[headingKey] = {
          tag: `h${level}`,
          text
        }
        continue
      }

      // Handle horizontal rules
      if (trimmedLine.match(/^([-*_])\1{2,}$/)) {
        if (inList) {
          this.finalizeList(result, listItems)
          listItems = []
          inList = false
        }

        const hrKey = this.generateKey('Hr')
        result[hrKey] = {
          tag: 'hr'
        }
        continue
      }

      // Handle blockquotes
      if (trimmedLine.startsWith('>')) {
        if (inList) {
          this.finalizeList(result, listItems)
          listItems = []
          inList = false
        }

        const quoteText = trimmedLine.replace(/^>\s*/, '')
        const parsedContent = this.parseInlineElements(quoteText)
        const blockquoteKey = this.generateKey('Blockquote')

        result[blockquoteKey] = {
          tag: 'blockquote',
          P: typeof parsedContent === 'string'
            ? {
                tag: 'p',
                text: parsedContent
              }
            : {
                tag: 'p',
                children: parsedContent
              }
        }
        continue
      }

      // Handle list items
      if (trimmedLine.match(/^[-*+]\s/) || trimmedLine.match(/^\d+\.\s/)) {
        const isOrdered = trimmedLine.match(/^\d+\.\s/)
        const text = trimmedLine.replace(/^(?:[-*+]|\d+\.)\s*/, '')

        if (!inList) {
          inList = true
          listItems = []
        }

        const parsedContent = this.parseInlineElements(text)
        listItems.push({
          content: parsedContent,
          ordered: isOrdered
        })
        continue
      }

      // Finalize list if we're no longer in one
      if (
        inList &&
          !trimmedLine.match(/^[-*+]\s/) &&
          !trimmedLine.match(/^\d+\.\s/)
      ) {
        this.finalizeList(result, listItems)
        listItems = []
        inList = false
      }

      // Handle paragraphs and other content
      if (trimmedLine) {
        const paragraphKey = this.generateKey('P')
        const parsedContent = this.parseInlineElements(trimmedLine)

        result[paragraphKey] =
            typeof parsedContent === 'string'
              ? {
                  tag: 'p',
                  text: parsedContent
                }
              : {
                  tag: 'p',
                  childExtends: 'Span',
                  children: parsedContent
                }
      }
    }

    if (inList && listItems.length > 0) {
      this.finalizeList(result, listItems)
    }

    return `export const ${componentName} = ${JSON.stringify(result, null, 2)};`
  }

  // Parse inline elements
  parseInlineElements (text) {
    const elements = []
    let currentText = ''
    let i = 0

    while (i < text.length) {
      // Handle images ![alt](src)
      if (text[i] === '!' && text[i + 1] === '[') {
        const altEnd = text.indexOf(']', i + 2)
        if (altEnd !== -1 && text[altEnd + 1] === '(') {
          const srcEnd = text.indexOf(')', altEnd + 2)
          if (srcEnd !== -1) {
            if (currentText) {
              elements.push(currentText)
              currentText = ''
            }

            const alt = text.substring(i + 2, altEnd)
            const src = text.substring(altEnd + 2, srcEnd)
            elements.push({
              Img: {
                tag: 'img',
                src,
                alt
              }
            })

            i = srcEnd + 1
            continue
          }
        }
      }

      // Handle links
      if (text[i] === '[') {
        const linkTextEnd = text.indexOf(']', i)
        if (linkTextEnd !== -1 && text[linkTextEnd + 1] === '(') {
          const urlEnd = text.indexOf(')', linkTextEnd + 2)
          if (urlEnd !== -1) {
            if (currentText) {
              elements.push(currentText)
              currentText = ''
            }

            const linkText = text.substring(i + 1, linkTextEnd)
            const url = text.substring(linkTextEnd + 2, urlEnd)
            elements.push({
              A: {
                tag: 'a',
                href: url,
                text: linkText
              }
            })

            i = urlEnd + 1
            continue
          }
        }
      }

      // Handle bold text **text**
      if (text.substr(i, 2) === '**') {
        const endIndex = text.indexOf('**', i + 2)
        if (endIndex !== -1) {
          if (currentText) {
            elements.push(currentText)
            currentText = ''
          }

          const boldText = text.substring(i + 2, endIndex)
          elements.push({
            Strong: {
              tag: 'strong',
              text: boldText
            }
          })
          i = endIndex + 2
          continue
        }
      }

      // Handle italic text *text*
      if (text[i] === '*' && text.substr(i, 2) !== '**') {
        const endIndex = text.indexOf('*', i + 1)
        if (endIndex !== -1) {
          if (currentText) {
            elements.push(currentText)
            currentText = ''
          }

          const italicText = text.substring(i + 1, endIndex)
          elements.push({
            Em: {
              tag: 'em',
              text: italicText
            }
          })
          i = endIndex + 1
          continue
        }
      }

      // Handle inline code `code`
      if (text[i] === '`') {
        if (currentText) {
          elements.push(currentText)
          currentText = ''
        }

        const endIndex = text.indexOf('`', i + 1)
        if (endIndex !== -1) {
          const codeText = text.substring(i + 1, endIndex)
          elements.push({
            extends: 'Labeled',
            text: codeText
          })
          i = endIndex + 1
          continue
        }
      }

      // Handle inline code `code`
      if (text[i] === '`') {
        const endIndex = text.indexOf('`', i + 1)
        if (endIndex !== -1) {
          if (currentText) {
            elements.push(currentText)
            currentText = ''
          }

          const codeText = text.substring(i + 1, endIndex)
          elements.push({
            Code: {
              tag: 'code',
              text: codeText
            }
          })
          i = endIndex + 1
          continue
        }
      }

      currentText += text[i]
      i++
    }

    if (currentText) {
      elements.push(currentText)
    }

    return elements.length === 1 && typeof elements[0] === 'string'
      ? elements[0]
      : elements
  }

  finalizeList (result, listItems) {
    if (listItems.length === 0) return

    const listKey = this.generateKey('List')
    const isOrdered = listItems[0].ordered

    result[listKey] = {
      tag: isOrdered ? 'ol' : 'ul',
      children: listItems.map((item) => ({
        tag: 'li',
        ...(typeof item.content === 'string'
          ? {
              text: item.content
            }
          : {
              children: item.content
            })
      }))
    }
  }

  generateKey (prefix) {
    return `${prefix}_${this.lineCounter++}`
  }

  reset () {
    this.lineCounter = 0
    this.sectionCounter = 0
  }
}
