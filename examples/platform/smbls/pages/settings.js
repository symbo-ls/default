export const settings = {
  extends: [
    'Page',
  ],
  flow: 'y',
  gap: 'D1',
  SettingsSection: {
    extends: 'SettingsSection',
    Title: {
      text: 'Platform Options',
    },
    Grid: {
      '@tabletM': {
        columns: 'repeat(3, 1fr)',
      },
      children: [
        {
          extends: 'SelectDropdownWithTitle',
          ignoreChildExtend: true,
          borderWidth: '1px 0 0 0',
          borderStyle: 'solid',
          padding: 'B1 - -',
          '@dark': {
            borderColor: '--color-line-dark',
          },
          '@light': {
            borderColor: '--color-line-light',
          },
          Title: {
            opacity: '.65',
            color: 'gray7',
            text: 'Default global theme',
          },
          SelectDropdown: {
            Value: {
              Text: {
                text: (el) => el.getRootState('globalTheme'),
              },
            },
            Dropdown: {
              top: '121%',
              options: [
                {
                  key: 'auto',
                  text: 'Auto',
                },
                {
                  key: 'dark',
                  text: 'Dark',
                },
                {
                  key: 'light',
                  text: 'Light',
                },
              ],
              onChoose: (ev, el, s, ctx, calleeElement) => {
                const theme = calleeElement.state.key
                el.getRootState().update({
                  globalTheme: theme,
                  sceneTheme: theme
                }, {
                  message: `Updated global theme to ${theme}`
                })
                el.getRoot().call('setCookie', 'sceneTheme', theme)
                el.getRoot().call('setCookie', 'globalTheme', theme)
              },
              DropdownHeader: {
                text: 'Global theme',
              },
              ListInDropdown: {
                childProps: {
                  extends: 'KeyValueColumnFields',
                  isActive: (el, s) => el.getRootState('globalTheme') === s.key,
                  text: (el, s) => s.text,
                  fontWeight: '400',
                },
              },
            },
          },
        },
        {
          key: 'optimizedMode',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow Symbols to optimize canvas for low performance devices',
            },
          },
          Caption: {
            text: 'Low performance mode:',
          },
          onChange: (ev, el) => {
            const val = el.getUserSettings('optimizedMode')
            el.setAllUserSettings({
              optimizedMode: !val,
              debuggingMode: !val,
              thumbnailPreview: !val,
              openOnDblClick: !val,
              explorerAutoscroll: val,
              allowFilesidebarPreview: val,
              allowTabs: val,
              allowTabPreview: val,
              showGrid: val,
              useGlassmorphism: val,
              allowZoombar: val,
              allowTeamCursors: val,
              showReferences: val,
              allowAutoPosition: val,
              useAnimations: val
            }, {
              message: 'Reset settings'
            })
          },
        },
        {
          key: 'explorer',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Toggle enable file sidebar',
            },
          },
          Caption: {
            text: 'Enable explorer:',
          },
        },
        {
          key: 'debuggingMode',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Logs and sends notifications on tested actions',
            },
          },
          Caption: {
            text: 'Debugging mode:',
          },
        },
        {
          key: 'useDomql3',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Use DOMQL3 syntax',
            },
          },
          Caption: {
            text: 'DOMQL3:',
          },
        },
        {
          key: 'useGlassmorphism',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Whether to use glass blurry effect on sidebar items',
            },
          },
          Caption: {
            text: 'Glass effect on sidebars:',
          },
        },
        {
          key: 'allowFilesidebarPreview',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable preview of components when you mouse over on file sidebar',
            },
          },
          Caption: {
            text: 'Enable file sidebar previews:',
          },
        },
        {
          key: 'explorerAutoscroll',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Scroll sidebar when a new component is selected',
            },
          },
          Caption: {
            text: 'Scroll files sidebar on active item:',
          },
        },
      ],
    },
  },
  CanvasSettings: {
    extends: 'SettingsSection',
    Title: {
      text: 'Canvas',
      QuestionMarkTooltip: {
        onClick: (ev, el) => {
          el.setAllUserSettings({
            optimizedMode: false,
            thumbnailPreview: false,
            showGrid: true,
            allowTabs: true,
            allowZoombar: true,
            allowAutoPosition: true,
            allowTabPreview: true,
            useAnimations: true
          }, {
            message: 'Reset settings'
          })
        },
      },
    },
    Grid: {
      '@tabletM': {
        columns: 'repeat(3, 1fr)',
      },
      children: [
        {
          key: 'thumbnailPreview',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Use thumbnail image previews on components when available to save rendering performance',
            },
          },
          Caption: {
            text: 'Use image previews:',
          },
        },
        {
          key: 'allowTeamCursors',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable showing up team members cursors',
            },
          },
          Caption: {
            text: 'Show team cursors:',
          },
        },
        {
          key: 'showReferences',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Show other places where component is reused',
            },
          },
          Caption: {
            text: 'Show component references:',
          },
        },
        {
          key: 'allowCanvasReplaceRouter',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow canvas to scroll to links with URLs to pages',
            },
          },
          Caption: {
            text: 'Allow links to scroll to pages:',
          },
        },
        {
          key: 'openOnDblClick',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable double click to open components from canvas and sidebar',
            },
          },
          Caption: {
            text: 'Double click to open:',
          },
        },
        {
          key: 'autoSelectSidebar',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Auto switch sidebar when artboard is selected',
            },
          },
          Caption: {
            text: 'Double click to open:',
          },
        },
        {
          key: 'showGrid',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable movable dotted background on the Canvas',
            },
          },
          Caption: {
            text: 'Show canvas grid:',
          },
        },
        {
          key: 'allowTitleOnArtboard',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow showing titles when hovering artboards',
            },
          },
          Caption: {
            text: 'Allow titles on artboard:',
          },
        },
        {
          key: 'allowZoombar',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable zoom bar on Canvas',
            },
          },
          Caption: {
            text: 'Enable zoom bar:',
          },
        },
        {
          key: 'allowAutoPosition',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable canvas windows auto positioning',
            },
          },
          Caption: {
            text: 'Auto positioning:',
          },
        },
        {
          key: 'allowInitialSelection',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable canvas load previously selected component after initial load',
            },
          },
          Caption: {
            text: 'Auto initial selection:',
          },
        },
        {
          key: 'useAnimations',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Enable animations during navigating on canvas',
            },
          },
          Caption: {
            text: 'Enable animations:',
          },
        },
        {
          key: 'autoCleanConsole',
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Auto clean console on platform updates',
            },
          },
          Caption: {
            text: 'Auto clean console:',
          },
        },
      ],
    },
  },
  DesignSystemOptions: {},
  SyncingSettings: {
    extends: 'SettingsSection',
    state: 'settings',
    Title: {
      text: 'Syncing options',
    },
    Grid: {
      '@tabletM': {
        columns: 'repeat(3, 1fr)',
      },
      children: [
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Sync platform navigation across the devices',
            },
          },
          onChange: (ev, el) => {
            el.toggleUserSettings('presentMode')
          },
          Caption: {
            text: 'Allow navigation sync:',
          },
          Input: {
            checked: (el) => el.getUserSettings('presentMode'),
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Sync platform navigation across project members',
            },
          },
          Caption: {
            text: 'Allow team navigation sync:',
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Sync platform navigation across project members',
            },
          },
          Caption: {
            text: 'Force reload:',
          },
          Input: null,
          SwitchField: null,
          IconButton: {
            order: 5,
            icon: 'reload',
            onClick: (ev, el) => {
              const agreed = window.confirm(
                'Do you want to force reload all connected devices?'
              )
              if (agreed) {
                el.getRootState().update({}, {
                  forceReload: true,
                  preventShModalUpdate: true
                })
              }
            },
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Sync platform navigation across project members',
            },
          },
          Caption: {
            text: 'Force navigate:',
          },
          Input: null,
          SwitchField: null,
          IconButton: {
            order: 5,
            icon: 'arrow top',
            onClick: (ev, el) => {
              const url = window.prompt(
                'Force navigate',
                window.location.pathname
              )
              el.getRootState().update({}, {
                forceNavigate: url,
                preventShModalUpdate: true
              })
            },
          },
        },
      ],
    },
  },
  WebsiteSettings: {
    extends: 'SettingsSection',
    state: 'settings',
    Title: {
      text: 'Website controls',
    },
    Grid: {
      '@tabletM': {
        columns: 'repeat(3, 1fr)',
      },
      children: [
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow symbols server fetching while app is loaded',
            },
          },
          Caption: {
            text: 'Fetch symbols data:',
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Load data asynchronically during app creation',
            },
          },
          Caption: {
            text: 'Use async loading:',
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow users to inspect elements on the website',
            },
          },
          Caption: {
            text: 'Allow inspecting:',
          },
        },
        {
          QuestionMarkTooltip: {
            TooltipHidden: {
              shapeDirection: 'top',
              tip: 'Allow users to sync platform updates to the website',
            },
          },
          Caption: {
            text: 'Allow website live sync:',
          },
        },
      ],
    },
  },
  CodeEditor: {
    extends: 'Flex',
    flow: 'y',
    state: 'settings/codeEditor',
    SectionTitle: {
      text: 'Code Editor',
      margin: '- - A2',
    },
    Flex: {
      gap: 'C1',
      childProps: {
        flex: 1,
      },
      Flex: {
        props: {
          flow: 'y',
          gap: 'B1',
        },
        childExtend: {
          extend: 'Grid',
          props: {
            gap: 'B1 C3',
            templateColumns: 'repeat(2, 1fr)',
          },
        },
        inputs: {
          childExtend: {
            extend: 'InputField',
            Input: {
              onInput: (ev, el, s) => {
                el.call('setCookie', codeEditor)
                // el.sdk.set(['settings', ''], (el.props.isNumber ? parseInt : v => v)(
                //       el.node.value
                //     ), {
                //       forceMonacoUpdate: true
                //     })
                // )
              },
            },
          },
          fontFamily: {
            Title: {
              text: 'Font family',
            },
            Input: {
              placeholder: 'default',
              value: '{{ fontFamily }}',
            },
          },
          fontSize: {
            Title: {
              text: 'Font size',
            },
            Input: {
              placeholder: '14',
              value: '{{ fontSize }}',
            },
          },
          lineHeight: {
            Title: {
              text: 'Line height',
            },
            Input: {
              placeholder: '20',
              value: '{{ lineHeight }}',
            },
          },
          editorDebounce: {
            Title: {
              text: 'Editor debounce',
            },
            Input: {
              placeholder: '20',
              value: (el, s) => s.editorDebounce || 250,
            },
          },
        },
        selects: {
          childExtend: {
            extend: 'SelectDropdownWithTitle',
            Title: {
              text: (el, s) => s[el.parent.key],
            },
            SelectDropdown: {
              Dropdown: {
                top: '121%',
                onChoose: (ev, el, s, ctx, calleeElement) => {
                  const {
                    key
                  } = el.parent.parent
                  s.update({
                    [key]: calleeElement.state.value
                  }, {
                    message: `Updated ${key} settings`,
                    forceMonacoUpdate: true
                  })
                },
                ListInDropdown: {
                  childExtends: {
                    extend: 'KeyValueColumnFields',
                    props: (el, s) => ({
                      isActive: el.getRootState('settings').codeEditor?.[
                        el.parent.parent.parent.parent.key
                      ] === s.value,
                      text: s.value,
                      fontWeight: '400'
                    }),
                  },
                },
              },
            },
          },
          tabSize: {
            props: {},
            Title: {
              text: 'Tab size',
            },
            SelectDropdown: {
              Value: {
                Text: {
                  text: ({
                    state
                  }) => state.tabSize || 2,
                },
              },
              Dropdown: {
                options: [
                  2,
                  4,
                  6,
                  8,
                ],
                DropdownHeader: {
                  text: 'Tab size',
                },
              },
            },
          },
          wordWrap: {
            props: {},
            Title: {
              text: 'Word wrap',
            },
            SelectDropdown: {
              Value: {
                Text: {
                  text: ({
                    state
                  }) => state.wordWrap || 'off',
                },
              },
              Dropdown: {
                options: [
                  'off',
                  'on',
                  'wordWrapColumn',
                  'bounded',
                ],
                DropdownHeader: {
                  text: 'Word wrap',
                },
              },
            },
          },
        },
        toggles: {
          childExtend: {
            extend: 'SwitchFieldWithCaption',
            props: {
              cursor: 'pointer',
              borderWidth: '1px 0 0 0',
              '@dark': {
                borderColor: '--color-line-dark',
              },
              '@light': {
                borderColor: '--color-line-light',
              },
              borderStyle: 'solid',
              padding: 'B1 - -',
              onChange: (ev, el, s) => {
                const {
                  key
                } = el
                const val = s[key]
                s.update({
                  [key]: !val
                }, {
                  message: `Updated ${key} settings`,
                  forceMonacoUpdate: true
                })
              },
            },
            Input: {
              checked: ({
                parent,
                state
              }) => state[parent.key],
            },
            Caption: {},
            SwitchField: {},
          },
          fontLigatures: {
            props: {
              QuestionMarkTooltip: {
                TooltipHidden: {
                  shapeDirection: 'top',
                  tip: 'Allow symbols server fetching while app is loaded',
                },
              },
              Caption: {
                text: 'Font ligature:',
              },
            },
          },
          'minimap.enabled': {
            props: {
              QuestionMarkTooltip: {
                TooltipHidden: {
                  shapeDirection: 'top',
                  tip: 'Allow symbols server fetching while app is loaded',
                },
              },
              Caption: {
                text: 'Minimap:',
              },
            },
          },
          folding: {
            props: {
              QuestionMarkTooltip: {
                TooltipHidden: {
                  shapeDirection: 'top',
                  tip: 'Allow symbols server fetching while app is loaded',
                },
              },
              Caption: {
                text: 'Folding:',
              },
            },
          },
        },
      },
      CodePreviewWidget: {
        props: (el, s) => ({
          widthRange: null,
          Monaco: {
            foldLevel: null,
            fileTab: {
              code: el.stringifyCode(s.parse()),
              filename: 'codeEditor.js'
            },
            onCodeEditCallback: (editor) => {
              const codeEditor = el.call('evalStringCodeUnsafe', editor.getValue())
              el.getRootState('settings').codeEditor = codeEditor
              s.set(codeEditor, {
                message: 'Updated cope editor preferences'
              })
            }
          }
        }),
      },
    },
    IconText: {
      extends: 'DocsLink',
      margin: 'B1 - -',
      color: 'dim',
      alignSelf: 'end',
      cursor: 'pointer',
      gap: 'X2',
      target: 'blank',
      href: 'https://microsoft.github.io/monaco-editor/typedoc/variables/editor.EditorOptions.html',
      icon: 'questionMarkFill',
      text: 'Monaco options',
      fontWeight: 400,
    },
  },
  SettingsFooter: {},
};