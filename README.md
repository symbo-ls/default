# Symbols Starter Kit

Example dev setup (boilerplate) to use [DOMQL](https://github.com/domql/domql). You can also check the live editor [Playground](https://domql.com/playground/).

## Setup

1. Clone the repo
```
git clone git@github.com:symbo-ls/starter-kit.git
```

2. Install scripts
```
yarn
```

3. Run the project
```
yarn start
```

---

## Table of contents

- [Design system](#design-system)
  - [COLOR](#color)
  - [THEME](#theme)
  - [FONT](#font)
  - [TYPOGRAPHY](#typography-scale)
  - [SPACING](#spacing)
  - [TIMING](#timing)
  - [ANIMATION](#animation)
  - [MEDIA](#media)
  - [CASES](#cases)
  - [Design system flags](#design-system-flags)
  - [Token conventions](#cross-cutting-token-conventions)
- [Built-in atoms](#built-in-atoms)
- [Default components](#default-components)
  - [Typography](#typography)
  - [Dividers](#dividers)
  - [Buttons](#buttons)
  - [Avatar](#avatar)
  - [Badge & Notification](#badge--notification)
  - [Form & Input](#form--input)
  - [Composition](#composition)
  - [Selection](#selection)
  - [Progress & Status](#progress--status)
  - [Navigation & Links](#navigation--links)
  - [Overlay & Disclosure](#overlay--disclosure)
  - [Data display](#data-display)
  - [Misc](#misc)

---

# Design system

All design system tokens live in `smbls/designSystem/`.

| File | Purpose |
|------|---------|
| `COLOR.js` | Named color palette |
| `GRADIENT.js` | Gradient definitions (empty by default) |
| `THEME.js` | Semantic surface themes (document, dialog, field, primary…) |
| `FONT.js` | Custom font faces |
| `FONT_FAMILY.js` | Font family stacks |
| `TYPOGRAPHY.js` | Type scale configuration |
| `SPACING.js` | Spacing scale configuration |
| `TIMING.js` | Easing curves |
| `CLASS.js` | Utility CSS class overrides (empty by default) |
| `GRID.js` | Grid presets (empty by default) |
| `SHAPE.js` | Shape/border-radius presets (empty by default) |
| `ANIMATION.js` | Named keyframe animations |
| `MEDIA.js` | Custom media query breakpoints |
| `CASES.js` | Conditional cases (environment flags) |
| `RESET.js` | Global CSS reset overrides (empty by default) |

## COLOR

Named hex values and semantic adaptive colors used everywhere via `color`, `background`, `borderColor`, and `theme` props.

### Static colors

| Token | Value | Usage |
|-------|-------|-------|
| `green` | `#389d34` | Success states |
| `red` | `#e15c55` | Warning/error states |
| `yellow` | `#EDCB38` | Attention states |
| `orange` | `#e97c16` | Accent states |
| `blue` | `#0474f2` | Primary interactive color |
| `phosphorus` | `#4db852` | Alternate success |
| `black` | `black` | Pure black |
| `white` | `#ffffff` | Pure white |
| `gray` | `#4e4e50` | Neutral mid-tone base |
| `codGray` | `#171717` | Near-black page background |
| `solitude` | `#e5f1ff` | Light blue tint |
| `anakiwa` | `#a3cdfd` | Light blue accent |
| `concrete` | `#f2f2f2` | Light neutral |
| `transparent` | `rgba(0,0,0,0)` | Fully transparent |

### Adaptive semantic colors

These tokens resolve to different values in dark and light mode automatically via the theme system.

| Token | Dark value | Light value | Usage |
|-------|-----------|-------------|-------|
| `title` | `gray 1 −168` (near-white) | `gray 1 +168` (near-black) | Primary text |
| `caption` | `gray 1 −68` | `gray 1 +68` | Secondary/meta text |
| `paragraph` | `gray 1 −42` | `gray 1 +42` | Body copy |
| `disabled` | `gray 1 −26` | `gray 1 +26` | Disabled state text |
| `line` | `gray 1 −16` | `gray 1 +16` | Dividers and borders |

The `gray X ±Y` notation is a Symbols color function: start from `gray` at opacity `X`, then lighten or darken by `Y` steps.

```js
Text: { color: 'blue' }          // static color
Caption: { color: 'caption' }    // adaptive semantic color
Box: { background: 'gray 0.1' }  // inline tint
```

## THEME

Themes define paired `background` + `color` (and optional effects) for dark and light modes. Apply with `theme: 'name'` on any element.

#### `document`

The page root surface.

| Mode | Background | Text |
|------|-----------|------|
| dark | `codGray` (`#171717`) | `title` |
| light | `gray 1 +168` (near-white) | `title` |

```js
Page: { extends: 'Flex', theme: 'document', minHeight: '100dvh' }
```

#### `dialog`

Elevated card or panel surface, with glass blur.

| Mode | Background | Text | Blur |
|------|-----------|------|------|
| dark | `gray 0.95 −68` | `title` | `blur(3px)` |
| light | `gray .95 +150` | `title` | `blur(3px)` |

```js
Card: { extends: 'Flex', theme: 'dialog', round: 'A', padding: 'A' }
```

#### `dialog-elevated`

Higher elevation than `dialog`, used for active/selected states in tab bars.

| Mode | Background | Text |
|------|-----------|------|
| dark | `gray 1 +68` | `title` |
| light | `gray 0.95 +140` | `title` |

```js
Tab: { '.isActive': { theme: 'dialog-elevated' } }
```

#### `field`

Input control surface.

| Mode | Background | Text | Placeholder |
|------|-----------|------|-------------|
| dark | `gray 0.95 −65` | `white` | `white 1 −78` |
| light | transparent | `black` | `gray 1 −68` |

```js
Input: { theme: 'field' }
```

#### `field-dialog`

Slightly elevated input variant, used inside dialog panels.

| Mode | Background | Text |
|------|-----------|------|
| dark | `gray 1 −16` | `title` |
| light | `gray 1 −96` | `title` |

#### `primary`

Main call-to-action color (blue background, white text).

```js
Button: { theme: 'primary', text: 'Save' }
```

#### `warning`

Destructive or alert state (red background, white text).

```js
Badge: { theme: 'warning', text: 'Error' }
```

#### `success`

Positive confirmation state (green background, white text).

#### `transparent`

No background, inherits current text color.

```js
Button: { theme: 'transparent', text: 'Cancel' }
```

#### `bordered`

Transparent background with a 1 px border.

| Mode | Border |
|------|--------|
| dark | `1px solid #4e4e50` |
| light | `1px solid #a3cdfd` |

#### `none`

Resets both color and background to `none`.

## FONT

Declares custom font faces loaded via the design system's `useFontImport` option.

| Font | Weight | Variable |
|------|--------|---------|
| `AvenirNext_Variable` | 400 | yes |

The variable font covers all weights from a single file and is the default UI font.

## TYPOGRAPHY scale

Controls the font-size scale (`fontSize` tokens).

```js
{ '@default': { base: 16, ratio: 1.25, range: [-5, 12], subSequence: true } }
```

| Token | Approx size |
|-------|------------|
| `W4`–`W1` | ~8–10 px |
| `W`–`Z` | ~10–16 px |
| `A`–`B` | ~16–24 px |
| `B1`–`C` | ~28–40 px |
| `C1`–`C2` | ~48–64 px |

```js
Heading: { fontSize: 'C' }
Caption: { fontSize: 'Z2' }
```

## SPACING

Controls the spacing scale (`padding`, `margin`, `gap`, `width`, `height`, `boxSize`, etc.).

```js
{ '@default': { base: 16, ratio: 1.618, range: [-5, 15] } }
```

| Token | Approx value | Common use |
|-------|-------------|-----------|
| `W2`–`W` | 2–4 px | Micro gaps, offsets |
| `X4`–`X` | 4–6 px | Icon padding, tight gaps |
| `Z4`–`Z` | 10–16 px | Compact padding |
| `A`–`A4` | 16–26 px | Default padding, gutters |
| `B`–`B4` | 26–42 px | Section padding |
| `C`–`C4` | 42–68 px | Container padding, avatar sizes |
| `D`–`F` | 68–178 px | Large sections, max-widths |
| `G`–`H` | 178–288 px | Wide containers |

Compound tokens use `+` (e.g. `A+W2`). Shorthand follows CSS rules; use `-` to skip a side:

```js
Box: { padding: 'A B2' }       // vertical A, horizontal B2
Flex: { gap: 'Z' }             // ~16 px
Avatar: { boxSize: 'C2' }      // ~68 px square
margin: '- - - auto'           // left margin only
```

## TIMING

| Token | Value | Character |
|-------|-------|-----------|
| `defaultBezier` | `cubic-bezier(.29, .67, .51, .97)` | Smooth ease-out |

```js
Box: { transition: 'B defaultBezier', transitionProperty: 'opacity, transform' }
```

## ANIMATION

| Name | Use |
|------|-----|
| `fadeInUp` | Entrance (opacity 0 + translateY → visible) |
| `fadeOutDown` | Exit (visible → opacity 0 + translateY) |
| `marquee` | Scrolling ticker (translateX 0 → −50%) |

```js
Modal: { animation: 'fadeInUp B defaultBezier' }
Ticker: { animation: 'marquee 8s linear infinite' }
```

## MEDIA

| Token | Query |
|-------|-------|
| `mobileL` | `min-width: 480px` |
| `tabletSm` | `min-width: 728px` |

```js
Grid: {
  columns: '1fr',
  '@tabletSm': { columns: 'repeat(2, 1fr)' },
  '@mobileL': { columns: 'repeat(3, 1fr)' }
}
```

## CASES

| Case | Condition |
|------|-----------|
| `isSafari` | `true` when the browser is Safari (not Chrome/Android) |

```js
Element: { $isSafari: { top: 'Z2', right: 'Z2' } }
```

## Design system flags

Set in `smbls/designSystem/index.js`:

| Flag | Default | Effect |
|------|---------|--------|
| `useReset` | `true` | Apply a CSS reset |
| `useVariable` | `true` | Emit CSS custom properties for all tokens |
| `useFontImport` | `true` | Load `FONT` entries via `@font-face` |
| `useIconSprite` | `true` | Inline the `ICONS` SVG sprite into the DOM |
| `useSvgSprite` | `true` | Inline any SVG sprite definitions |
| `useDefaultConfig` | `true` | Merge the smbls default design system config |
| `useDocumentTheme` | `true` | Apply `document` theme to `<html>` |
| `verbose` | `false` | Suppress design system debug output |

## Cross-cutting token conventions

```js
// Spacing shorthand
padding: 'A'          // all sides
padding: 'A B'        // vertical | horizontal
padding: 'A B C D'    // top | right | bottom | left
margin: '- - - auto'  // '-' skips a side

// Color modifier syntax
'gray 0.95 -68'   // gray at 95% opacity, darkened 68 steps
'gray 1 +168'     // gray at full opacity, lightened 168 steps

// Dark/light mode targeting
Box: {
  '@dark': { background: 'codGray' },
  '@light': { background: 'concrete' }
}

// Responsive overrides
Grid: {
  columns: 'repeat(4, 1fr)',
  '@tabletSm': { columns: 'repeat(2, 1fr)' },
  '@mobileL': { columns: '1fr' }
}
```

---

# Built-in atoms

Built-in atoms are the primitive HTML wrappers available on every element.

## Atoms

- `Text` → `<span>`
- `Box` → `<div>`
- `Flex` → `<div>` (flexbox)
- `Grid` → `<div>` (CSS grid)
- `Link` → `<a>`
- `Input` → `<input>`
- `Radio` → `<input>`
- `Checkbox` → `<input>`
- `Svg` → `<svg>`
- `Icon` → `<svg>` (icon sprite)
- `IconText` → `<div>`
- `Button` → `<button>`
- `Img` → `<img>`
- `Iframe` → `<iframe>`
- `Video` → `<video>`

## Built-in UI kit components

Higher-level components shipped in the UI kit, composed from atoms:

- `Avatar`
- `Button`
- `Dialog`
- `Dropdown`
- `Icon`
- `Input`
- `Link`
- `Notification`
- `Range`
- `Select`
- `Tooltip`

All components use flattened props (no `props` wrapper) and `onX` events.

### Text

Primary use: inline text content.

Common props: `text`, `color`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `textTransform`, `textDecoration`, `textAlign`, `maxWidth`, `overflow`, `whiteSpace`

```js
Text: { text: 'Hello', fontSize: 'B', color: 'title' }
```

### Box

Primary use: generic container.

Common props: `padding`, `margin`, `border`, `borderRadius`, `background`, `shadow`, `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`, `position`, `inset`, `overflow`, `zIndex`

```js
Box: { padding: 'A B', background: 'surface', borderRadius: 'B' }
```

### Flex

Primary use: layout container using flexbox.

Common props: `flow` / `flexFlow`, `align` / `flexAlign`, `alignItems`, `justifyContent`, `gap`, `flex`, `wrap`

```js
Flex: { flow: 'y', align: 'center space-between', gap: 'B' }
```

### Grid

Primary use: layout container using CSS grid.

Common props: `columns` / `gridTemplateColumns`, `rows` / `gridTemplateRows`, `gap`, `columnGap`, `rowGap`, `gridAutoFlow`

```js
Grid: { columns: 'repeat(3, 1fr)', gap: 'A' }
```

### Link

Primary use: navigation or external link.

Common props: `href`, `target`, `rel`, `text`, `color`, `textDecoration`, `onClick`

```js
Link: { text: 'Docs', href: '/docs' }
```

### Input

Primary use: text input.

Common props: `type`, `name`, `value`, `placeholder`, `required`, `disabled`, `onInput`, `onChange`, `onKeydown`, `padding`, `background`, `border`, `round`

```js
Input: { type: 'text', name: 'title', placeholder: 'Enter title' }
```

### Radio and Checkbox

Primary use: selectable inputs.

Common props: `name`, `value`, `checked`, `disabled`, `onChange`

```js
Checkbox: { name: 'agree', checked: true }
```

### Svg

Primary use: raw SVG container.

Common props: `html` (inline SVG markup), `width`, `height`, `viewBox`, `fill`, `stroke`

```js
Svg: { html: '<path d="..." />', viewBox: '0 0 24 24' }
```

### Icon

Primary use: icon from sprite.

Common props: `name` (sprite symbol id), `size` / `boxSize`, `color`

```js
Icon: { name: 'chevronRight', boxSize: 'A' }
```

### IconText

Primary use: icon + text combo.

Common props: `icon`, `text`, `gap`, `align`, `color`

```js
IconText: { icon: 'search', text: 'Search', gap: 'Z' }
```

### Button

Primary use: actionable control.

Common props: `text`, `icon`, `type`, `disabled`, `theme`, `padding`, `round`, `onClick`, `onSubmit`

```js
Button: { text: 'Save', theme: 'primary', type: 'submit' }
```

### Img

Primary use: image element.

Common props: `src`, `alt`, `loading`, `width`, `height`, `boxSize`, `objectFit`

```js
Img: { src: '/logo.png', alt: 'Logo', boxSize: 'B' }
```

### Iframe

Primary use: embedded content.

Common props: `src`, `title`, `allow`, `sandbox`, `width`, `height`, `border`

```js
Iframe: { src: 'https://example.com', width: '100%', height: '300px' }
```

### Video

Primary use: video player.

Common props: `src`, `poster`, `controls`, `autoplay`, `muted`, `loop`, `width`, `height`, `objectFit`

```js
Video: { src: '/demo.mp4', controls: true, width: '100%' }
```

## Cross-cutting props

All atoms support:

- `@media` keys (e.g. `@mobile`)
- pseudo selectors (e.g. `:hover`, `:active`)
- conditional cases (e.g. `.isActive`, `!isActive`)
- `childProps` for one-level child overrides
- `children` arrays or nested object trees
- `onInit`, `onRender`, `onUpdate`, `onStateUpdate`

---

# Default components

All components in `smbls/components` and how their properties are commonly used.

## Typography

- `H1` → `<h1>`
- `H2` → `<h2>`
- `H3` → `<h3>`
- `H4` → `<h4>`
- `H5` → `<h5>`
- `H6` → `<h6>`
- `P` → `<p>`
- `Caption` → `<span>` (small label text)
- `Headline` → `<span>` (large emphasis text)
- `Subhead` → `<span>` (subheading text)
- `Footnote` → `<span>` (footer reference text)
- `Strong` → `<strong>`
- `Italic` → `<em>`
- `U` → `<u>`

All typography components accept a `text` prop.

### H1–H6

Primary use: semantic section headings.

Common props: `text`, `color`, `fontSize`, `fontWeight`, `lineHeight`

```js
H2: { text: 'Section title' }
```

### P

Primary use: body paragraph text.

Common props: `text`, `color`, `fontSize`, `lineHeight`, `maxWidth`

```js
P: { text: 'A short description goes here.' }
```

### Caption

Primary use: small labels, hints, and metadata text.

Common props: `text`, `color`, `fontSize`, `opacity`

```js
Caption: { text: 'Updated 3 days ago' }
```

### Headline / Subhead / Footnote

Primary use: display-size headings, sub-sections, and footnotes.

```js
Headline: { text: 'Welcome back' }
Subhead: { text: 'Manage your workspace' }
Footnote: { text: '* Prices are subject to change' }
```

### Strong / Italic / U

Primary use: inline text emphasis.

```js
Strong: { text: 'Important' }
Italic: { text: 'Note:' }
U: { text: 'Terms of service' }
```

---

## Dividers

- `Hr` → `<hr>`
- `HrLegend` → `<div>` (line with centered text)

### Hr

Primary use: visual horizontal rule between sections.

```js
Hr: { minWidth: 'F' }
```

### HrLegend

Primary use: divider with a centered label, commonly used between form sections.

```js
HrLegend: { text: 'Or' }
```

---

## Buttons

- `IconButton` — icon-only circular button
- `IconButtonSet` — group of icon buttons
- `CounterButton` — button with notification badge
- `CounterIconButton` — icon button with positioned badge
- `IconCounterButton` — button with icon and counter side-by-side
- `UploadButton` — text button that opens file picker
- `UploadIconButton` — icon button that opens file picker
- `SubmitButton` — form submit button
- `ButtonSet` — group of buttons
- `ConfirmationButtons` — yes/no pair
- `ImgButton` — image as button
- `ImgHeadingButton` — image and heading as button
- `InputButton` — email input with action button

### IconButton

Primary use: compact circular button that shows only an icon.

Common props: `Icon.name`, `theme` (default: `'dialog'`), `fontSize`, `padding`, `round`

```js
IconButton: { Icon: { name: 'plus' }, theme: 'dialog' }
```

### IconButtonSet

Primary use: row of icon buttons.

```js
IconButtonSet: {
  childExtend: 'IconButton',
  children: [{ Icon: { name: 'edit' } }, { Icon: { name: 'trash' } }]
}
```

### CounterButton

Primary use: button that shows a notification count badge.

```js
CounterButton: {
  Span: { text: 'Messages' },
  NotificationCounter: { text: '7' }
}
```

### CounterIconButton

Primary use: icon button with an absolutely positioned counter badge.

```js
CounterIconButton: { Icon: { name: 'bell' }, NotificationCounter: { text: '3' } }
```

### IconCounterButton

Primary use: button combining an icon, label, and counter.

```js
IconCounterButton: {
  Icon: { name: 'inbox' },
  Span: { text: 'Inbox' },
  NotificationCounter: { text: '12' }
}
```

### UploadButton / UploadIconButton

```js
UploadButton: { text: 'Choose file' }
UploadIconButton: { Icon: { name: 'upload' } }
```

### SubmitButton

```js
SubmitButton: { value: 'Create account' }
```

### ButtonSet

```js
ButtonSet: {
  children: [{ text: 'Cancel' }, { text: 'Save', theme: 'primary' }]
}
```

### ConfirmationButtons

```js
ConfirmationButtons: {
  children: [{ text: 'Cancel' }, { text: 'Delete', theme: 'danger' }]
}
```

### InputButton

Primary use: inline email or text input with a submit button.

```js
InputButton: {
  Input: { placeholder: 'Enter your email' },
  Button: { text: 'Sign up' }
}
```

---

## Avatar

- `Avatar` — single avatar image
- `AvatarSet` — overlapping group of avatars
- `AvatarStatus` — avatar with online/offline dot
- `AvatarParagraph` — avatar + paragraph
- `AvatarHeading` — avatar + heading
- `AvatarHgroup` — avatar + heading group
- `AvatarBadgeHgroup` — avatar + heading + badge
- `AvatarHgroupIconButton` — avatar + heading + icon button
- `AvatarHgroupSelect` — avatar + heading + select
- `AvatarSelectPicker` — avatar inside label with select
- `AvatarChatPreview` — avatar + message preview
- `AvatarStatusChatPreview` — avatar with status + message preview
- `AvatarSetChatPreview` — avatar group + message preview

### Avatar

Common props: `boxSize` (default: `'C2'`), `src`, `alt`

```js
Avatar: { boxSize: 'C2' }
```

### AvatarSet

```js
AvatarSet: { children: [{}, {}, {}] }
```

### AvatarStatus

```js
AvatarStatus: { Avatar: { boxSize: 'C' }, StatusDot: { theme: 'success' } }
```

### AvatarHgroup

```js
AvatarHgroup: { H: { text: 'Nika Tomadze' }, P: { text: 'Product Designer' } }
```

### AvatarBadgeHgroup

```js
AvatarBadgeHgroup: {
  H: { text: 'Nika Tomadze' },
  Badge: { text: 'Admin', theme: 'primary' }
}
```

### AvatarChatPreview / AvatarStatusChatPreview / AvatarSetChatPreview

Primary use: chat list item with avatar, message preview, and timestamp.

```js
AvatarChatPreview: {
  H: { text: 'Design Team' },
  P: { text: 'Can you join us today?' },
  Value: { text: '2:20' }
}
```

---

## Badge & Notification

- `Badge` — colored label badge
- `BadgeCaption` — caption + badge
- `BadgeParagraph` — paragraph + badge
- `NotificationCounter` — circular number badge
- `NotCounterParagraph` — paragraph + counter

### Badge

Common props: `text`, `theme` (default: `'warning'`), `round`, `padding`

```js
Badge: { text: 'New', theme: 'primary' }
```

### BadgeCaption

```js
BadgeCaption: { Caption: { text: 'Status' }, Badge: { text: 'Active', theme: 'success' } }
```

### NotificationCounter

```js
NotificationCounter: { text: '5', theme: 'primary' }
```

### NotCounterParagraph

```js
NotCounterParagraph: { P: { text: 'New messages arrived' }, NotificationCounter: { text: '3' } }
```

---

## Form & Input

- `Field` — input with optional icon
- `FieldCaption` — labeled field with caption
- `IconInput` — input with icon overlay
- `FixedNumberField` — 4-digit code input
- `CardNumberField` — 4×4-digit card number entry
- `Group` — form section with title
- `GroupField` — labeled form fieldset
- `Select` — native select
- `SelectPicker` — styled select with chevron icon
- `SelectField` — field-styled select
- `SelectHgroup` — select with heading description
- `NumberPicker` — increment/decrement number input
- `Search` — search input with icon
- `SearchDropdown` — searchable filterable dropdown
- `TextareaIconButton` — textarea with send button

### Field

Common props: `Input.placeholder`, `Input.type`, `Input.round`, `Icon.icon`, `theme` (default: `'field'`)

```js
Field: { Input: { placeholder: 'Enter your name' }, Icon: { icon: 'user' } }
```

### FieldCaption

```js
FieldCaption: {
  Caption: { text: 'Email address' },
  Field: { Input: { placeholder: 'you@example.com' } }
}
```

### IconInput

```js
IconInput: { Input: { placeholder: 'Search…' }, Icon: { name: 'search' } }
```

### FixedNumberField / CardNumberField

Primary use: OTP/PIN entry (`FixedNumberField`) or full card number (`CardNumberField`).

```js
FixedNumberField: { Input: { placeholder: '0000' } }
CardNumberField: { children: [{}, {}, {}, {}] }
```

### Group / GroupField

```js
Group: { Title: { text: 'Personal info' }, flow: 'y', gap: 'A' }
```

### Select / SelectPicker / SelectField

```js
SelectPicker: {
  Select: {
    children: [{ text: 'Option A', value: 'a' }, { text: 'Option B', value: 'b' }]
  }
}
```

### SelectHgroup

```js
SelectHgroup: {
  H: { text: 'Language' },
  P: { text: 'Choose your preferred language' },
  SelectPicker: {}
}
```

### NumberPicker

```js
NumberPicker: { Value: { text: '{{ currentValue }}' } }
```

### Search

```js
Search: { Input: { placeholder: 'Search…' } }
```

### SearchDropdown

```js
SearchDropdown: { state: { data: ['New York', 'Los Angeles', 'Chicago'] } }
```

### TextareaIconButton

```js
TextareaIconButton: {
  Textarea: { placeholder: 'Write a message…' },
  IconButton: { Icon: { name: 'send' } }
}
```

---

## Composition

Composition components pair a primary element (heading, icon, image) with text content or controls.

- `ButtonHeading` — heading + button
- `ButtonHgroup` — heading group + button
- `ButtonParagraph` — paragraph + button
- `IconHeading` — icon + heading
- `IconButtonHeading` — heading + icon button
- `IconButtonHgroup` — heading group + icon button
- `IconHgroup` — icon + heading group
- `ImgHeading` — image + heading
- `ImgHgroup` — image + heading group
- `ImgHeadingButton` — image + heading as button
- `ValueHeading` — heading + unit/value on right
- `IcontextLink` — icon + text as link
- `IconTextSet` — list of icon + text pairs
- `SectionHeader` — section header with icon buttons

### ButtonHeading

```js
ButtonHeading: {
  H: { tag: 'h5', text: 'Team members' },
  Button: { text: 'Invite', theme: 'primary' }
}
```

### ButtonHgroup

```js
ButtonHgroup: {
  H: { text: 'Upgrade plan' },
  P: { text: 'Get access to all features' },
  Button: { text: 'Upgrade' }
}
```

### ButtonParagraph

```js
ButtonParagraph: { P: { text: "Didn't receive the code?" }, Button: { text: 'Resend' } }
```

### IconHeading

```js
IconHeading: { Icon: { name: 'star', fontSize: 'C' }, H: { tag: 'h5', text: 'Featured' } }
```

### IconHgroup

```js
IconHgroup: {
  Icon: { name: 'logo', display: 'block' },
  H: { text: 'Symbols' },
  P: { text: 'Design system toolkit' }
}
```

### ValueHeading

```js
ValueHeading: {
  H: { tag: 'h6', text: 'Revenue' },
  UnitValue: { Unit: { text: '$' }, Value: { text: '1,200' } }
}
```

### IcontextLink

```js
IcontextLink: { Icon: { name: 'twitter', fontSize: 'B' }, text: 'Follow on Twitter' }
```

### IconTextSet

```js
IconTextSet: {
  children: [
    { Icon: { name: 'phone' }, text: '+1 (555) 123-4567' },
    { Icon: { name: 'mail' }, text: 'hello@example.com' }
  ]
}
```

### SectionHeader

```js
SectionHeader: {
  Hgroup: { H: { text: 'Recent activity' } },
  IconButtonSet: { children: [{ Icon: { name: 'filter' } }] }
}
```

---

## Selection

Selection components come in three flavors — **Check**, **Radio**, **Toggle** — each available in caption, heading group, and list variants.

- `CheckCaption` / `RadioCaption` / `ToggleCaption` — selectable item with short label
- `CheckCaptionList` / `RadioCaptionList` / `ToggleCaptionList` — stacked list of caption items
- `CheckHgroup` / `RadioHgroup` / `ToggleHgroup` — selectable item with title + description
- `CheckHgroupList` / `RadioHgroupList` / `ToggleHgroupList` — stacked list of hgroup items
- `CheckStep` / `RadioStep` — step in a stepper flow with progress bar
- `CheckStepSet` / `RadioSteps` — full stepper with multiple steps
- `RadioMark` — standalone custom radio circle visual

### Caption variants

```js
CheckCaption: { Caption: { text: 'Accept terms' } }
RadioCaption: { Caption: { text: 'Option A' } }
ToggleCaption: { Caption: { text: 'Enable notifications' } }
```

### Hgroup variants

```js
CheckHgroup: { H: { text: 'Weekly digest' }, P: { text: 'Receive a summary every Monday' } }
```

### List variants

```js
ToggleHgroupList: {
  children: [
    { H: { text: 'Email alerts' }, P: { text: 'Sent daily' } },
    { H: { text: 'Push notifications' }, P: { text: 'Instant' } }
  ]
}
```

### Stepper

```js
RadioSteps: {
  children: [
    { H6: { text: 'Account info' }, RadioMark: { isActive: true } },
    { H6: { text: 'Payment' } },
    { H6: { text: 'Confirm' } }
  ]
}
```

---

## Progress & Status

- `Progress` — linear progress bar
- `CircleProgress` — circular progress indicator
- `ValueProgress` — progress bar + unit/value
- `ValueCircleProgress` — circular progress + centered value
- `ProgressStepSet` — multiple progress bars for steps
- `HgroupSteps` — heading group with step progress bars
- `StatusDot` — small colored status dot
- `Stars` — 5-star rating

### Progress

Common props: `value` (0–1), `height`, `minWidth`, `round`, `theme`

```js
Progress: { value: 0.6, height: 'X', round: 'Y' }
```

### CircleProgress

```js
CircleProgress: { value: 0.73, boxSize: 'D' }
```

### ValueProgress / ValueCircleProgress

```js
ValueProgress: {
  Progress: { value: 0.73 },
  UnitValue: { Value: { text: '73' }, Unit: { text: '%' } }
}
```

### ProgressStepSet

```js
ProgressStepSet: { children: [{ value: 1 }, { value: 0.4 }, { value: 0 }] }
```

### HgroupSteps

```js
HgroupSteps: {
  H: { text: 'Getting started' },
  P: { text: 'Complete these steps' },
  ProgressStepSet: { children: [{ value: 1 }, { value: 0.5 }, { value: 0 }] }
}
```

### StatusDot

```js
StatusDot: { theme: 'success' }
```

### Stars

```js
Stars: { children: [{ name: 'star' }, { name: 'star' }, { name: 'star' }, { name: 'star' }, { name: 'star' }] }
```

---

## Navigation & Links

- `Link` — hyperlink
- `LinkSet` — navigation list of links
- `LinkHgroup` — heading group + link
- `LinkParagraph` — paragraph + inline link
- `IcontextLink` — icon + text link (see [Composition](#composition))
- `Breadcrumb` — breadcrumb path
- `NavigationDots` — dot-based carousel indicator
- `NavigationArrows` — previous/next arrow buttons
- `Pagination` — numbered page controls
- `TabSet` — tab bar navigation
- `ScrollableList` — scrollable menu list

### Link

```js
Link: { text: 'Read more', href: '/article' }
```

### LinkSet

```js
LinkSet: {
  tag: 'nav',
  children: [{ text: 'Home', href: '/' }, { text: 'Docs', href: '/docs' }]
}
```

### LinkHgroup

```js
LinkHgroup: {
  H: { text: 'Tbilisi' },
  P: { text: 'Georgia' },
  Link: { text: 'Get directions', href: '#' }
}
```

### LinkParagraph

```js
LinkParagraph: {
  P: { text: 'By continuing you agree to our' },
  Link: { text: 'Privacy Policy', href: '/privacy', textDecoration: 'underline' }
}
```

### NavigationDots

```js
NavigationDots: { children: [{}, { isActive: true }, {}] }
```

### NavigationArrows

```js
NavigationArrows: {
  children: [{ Icon: { name: 'chevronLeft' } }, { Icon: { name: 'chevronRight' } }]
}
```

### Pagination

```js
Pagination: {
  Flex: { children: [{ text: '1', isActive: true }, { text: '2' }, { text: '3' }] }
}
```

### TabSet

```js
TabSet: {
  children: [{ text: 'Overview', isActive: true }, { text: 'Details' }, { text: 'Reviews' }]
}
```

### ScrollableList

```js
ScrollableList: {
  Flex: { maxHeight: 'D2', children: [{ text: 'Item One' }, { text: 'Item Two' }] }
}
```

---

## Overlay & Disclosure

- `Modal` — modal dialog container
- `MessageModal` — modal with a message heading and body
- `Accordion` — expandable/collapsible section

### Modal

```js
Modal: {
  Hgroup: { H: { text: 'Confirm action' } },
  IconButton: { Icon: { name: 'x' } }
}
```

### MessageModal

```js
MessageModal: {
  Hgroup: {
    H: { text: 'Account deleted' },
    P: { text: 'Your account has been permanently removed.' }
  }
}
```

### Accordion

Common props: `ButtonParagraph.P.text` (header), `P.text` (body), `state.activeAccordion`

```js
Accordion: {
  ButtonParagraph: { P: { text: 'How does billing work?' } },
  P: { text: 'You are billed monthly…' }
}
```

---

## Data display

- `UnitValue` — unit + value pair (price, stat, etc.)
- `BulletCaption` — caption with colored bullet dot
- `StoryCard` — large image card with overlaid content
- `ListingItem` — post/listing row item
- `PackageFeatureItem` — feature row in a pricing card
- `UserNavbar` — user profile row in navbar
- `LayerSimple` — card with title and checklist
- `LoadingGif` — animated loading indicator

### UnitValue

```js
UnitValue: { Unit: { text: '$' }, Value: { text: '99' } }
```

### BulletCaption

```js
BulletCaption: { text: 'Orders', ':before': { background: 'blue' } }
```

### UserNavbar

```js
UserNavbar: { H: { text: 'Nika Tomadze' }, P: { text: 'Product Designer' } }
```

### LayerSimple

```js
LayerSimple: {
  Title: { text: 'Today' },
  Flex: { children: [{ Icon: { icon: 'check' }, Span: { text: 'Morning standup' } }] }
}
```

### LoadingGif

```js
LoadingGif: { opacity: '.5', boxSize: 'B' }
```

---

## Misc

### Scrollbar

Primary use: custom scrollbar track with optional arrow navigation.

```js
Scrollbar: { NavigationArrows: {} }
```

---

## Cross-cutting props

All default components inherit the same cross-cutting capabilities as built-in atoms:

- `@media` keys (e.g. `@mobile`)
- pseudo selectors (e.g. `:hover`, `:focus`)
- conditional cases (e.g. `.isActive`, `!isDisabled`)
- `childProps` for one-level child overrides
- `children` arrays or nested object trees
- `onInit`, `onRender`, `onUpdate`, `onStateUpdate`
- `state` for local component state
