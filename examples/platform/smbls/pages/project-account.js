export const projectAccount = {
  gap: 'B2',
  flow: 'y',
  padding: 'C1',
  width: '100%',
  maxWidth: 'J2',
  margin: '0 auto',
  state: {
    editMode: false,
    errorMessage: '',
    successMessage: ''
  },
  onInit: (el, s) => {
    const rootState = el.getRootState()
    const state = {
      projectName: rootState.projectName,
      projectId: rootState.projectId,
      projectKey: rootState.appKey,
      tier: rootState.tier || 'none',
      isSharedLibrary: rootState.isSharedLibrary || false,
      bucket: rootState.bucket || 'none',
      designTool: rootState.designTool || 'none',
      seats: rootState.seats || 1,
      version: rootState.version || 'none',
      access: rootState.access || 'none',
      visibility: rootState.visibility || 'none',
      createdAt: rootState.createdAt || 'none',
      updatedAt: rootState.updatedAt || 'none',
      tags: rootState.tags || []
    }
    el.call('overwrite', s, state)
  },
  onStateUpdate: (changes, el) => {
    if (changes.successMessage) {
      el.call('openNotification', {
        title: 'Success message',
        message: changes.successMessage,
        type: 'success'
      })
    }
    if (changes.errorMessage) {
      el.call('openNotification', {
        title: 'Error message',
        message: changes.errorMessage,
        type: 'error'
      })
    }
  },
  Hgroup: {
    extends: 'Flex',
    flow: 'y',
    gap: 'Y',
    margin: '0 0 C1 0',
    width: '100%',
    H: {
      color: 'title',
      text: (el, s) => `Settings for ${s.projectName}`,
      fontWeight: 'bold'
    },
    P: {
      text: 'Manage your project settings, team members, and more.',
      margin: '0'
    }
  },
  ProjectInfoSection: {
    extends: 'Flex',
    width: '100%',
    gap: 'C1',
    align: 'start',
    flow: 'y',
    childExtends: 'Flex',
    childProps: {
      gap: 'A',
      flow: 'y',
      align: 'start',
      CaptionTitle: {},
      Flex: {
        gap: 'C C3',
        width: '100%',
        flow: 'row wrap',
        childExtends: 'Group',
        childProps: {
          width: 'G',
          Strong: {
            hide: (el, s) => s.editMode
          },
          Field: {
            hide: (el, s) => !s.editMode
          }
        }
      },
      position: 'relative'
    },
    children: [
      {
        CaptionTitle: {
          Text: {
            text: 'Project info'
          }
        },
        Flex: {
          children: [
            {
              Title: {
                text: 'Project Name:'
              },
              Strong: {
                text: (el, s) => s.projectName
              },
              Field: {
                extends: 'Input',
                placeholder: 'e.g. Acme',
                value: '{{ projectName }}',
                required: true,
                onInput: (ev, el, s) => {
                  s.update({
                    projectName: el.node.value
                  })
                }
              }
            },
            {
              Title: {
                text: 'Project Key:',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => s.projectKey
              },
              Field: {
                extends: 'Input',
                value: '{{ projectKey }}',
                disabled: true
              }
            }
          ]
        }
      },
      {
        CaptionTitle: {
          Text: {
            text: 'Status'
          }
        },
        Flex: {
          children: [
            {
              Title: {
                text: 'Tier:',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => {
                  const tierMap = {
                    free: 'Starter',
                    pro: 'Pro',
                    enterprise: 'Enterprise'
                  }
                  return tierMap[s.tier] || s.tier
                }
              }
            },
            {
              Title: {
                text: 'Seats:',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => s.seats
              },
              Field: {
                extends: 'Input',
                type: 'number',
                min: 1,
                value: '{{ seats }}',
                onInput: (ev, el, s) => {
                  s.update({
                    seats: parseInt(el.node.value, 10)
                  })
                }
              }
            }
          ]
        }
      },
      {
        CaptionTitle: {
          Text: {
            text: 'Permissions'
          }
        },
        Flex: {
          children: [
            {
              Title: {
                text: 'Visibility:',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => {
                  const visibilityMap = {
                    private: 'Private',
                    public: 'Public',
                    'password-protected': 'Password Protected'
                  }
                  return visibilityMap[s.visibility] || s.visibility
                }
              },
              Field: {
                extends: 'SelectField',
                padding: '0',
                round: 'C1',
                Select: {
                  name: 'visibility',
                  id: 'visibility',
                  onChange: (ev, el, s) => {
                    ev.preventDefault()
                    ev.stopImmediatePropagation()
                    s.update({
                      visibility: ev.target.value
                    })
                  },
                  childrenAs: 'props',
                  children: () => [{
                    value: 'private',
                    text: 'Private'
                  },
                  {
                    value: 'public',
                    text: 'Public'
                  },
                  {
                    value: 'password-protected',
                    text: 'Password Protected'
                  }
                  ],
                  childProps: {
                    tag: 'option',
                    attr: {
                      disabled: (el) => !el.sdk.hasPermission('projectSettings'),
                      selected: (el, s) => s.visibility === el.props.value
                    }
                  }
                }
              }
            },
            {
              Title: {
                text: 'Access:',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => {
                  const accessMap = {
                    account: 'Account',
                    public: 'Public'
                  }
                  return accessMap[s.access] || s.access
                }
              },
              Field: {
                extends: 'SelectField',
                padding: '0',
                round: 'C1',
                Select: {
                  name: 'access',
                  id: 'access',
                  onChange: (ev, el, s) => {
                    ev.preventDefault()
                    ev.stopImmediatePropagation()
                    s.update({
                      access: ev.target.value
                    })
                  },
                  childrenAs: 'props',
                  children: () => [{
                    value: 'account',
                    text: 'Account'
                  },
                  {
                    value: 'public',
                    text: 'Public'
                  }
                  ],
                  childProps: {
                    tag: 'option',
                    attr: {
                      disabled: (el) => !el.sdk.hasPermission('projectSettings'),
                      selected: (el, s) => s.access === el.props.value
                    }
                  }
                }
              }
            },
            {
              show: (el, s) => s.visibility === 'password-protected',
              Title: {
                text: 'Access Password'
              },
              Field: {
                extends: 'Input',
                type: 'password',
                placeholder: 'Enter new password',
                value: '',
                attr: {
                  required: (el, s) => s.visibility === 'password-protected'
                },
                onChange: (ev, el, s) => {
                  const val = el.node.value
                  el.call('sha256', val).then((hash) => {
                    s.update({
                      projectPassword: hash
                    })
                  })
                }
              }
            },
            {
              Title: {
                text: 'Shared Library:',
                tip: 'Is this a shared library?',
                fontWeight: 'bold'
              },
              Strong: {
                text: (el, s) => (s.isSharedLibrary ? 'Yes' : 'No')
              },
              Field: {
                extends: 'SelectField',
                padding: '0',
                round: 'C1',
                Select: {
                  name: 'isSharedLibrary',
                  id: 'isSharedLibrary',
                  onChange: (ev, el, s) => {
                    ev.preventDefault()
                    ev.stopImmediatePropagation()
                    s.update({
                      isSharedLibrary: ev.target.value === 'yes'
                    })
                  },
                  childrenAs: 'props',
                  children: () => [{
                    value: 'yes',
                    text: 'Yes'
                  },
                  {
                    value: 'no',
                    text: 'No'
                  }
                  ],
                  childProps: {
                    tag: 'option',
                    attr: {
                      disabled: (el) => !el.sdk.hasPermission('projectSettings'),
                      selected: (el, s) =>
                        (s.isSharedLibrary ? 'yes' : 'no') === el.props.value
                    }
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  Buttons: {
    margin: 'C - -',
    ContinueButton: {
      padding: 'Z2 C1',
      background: 'title',
      color: 'title-reversed',
      show: (el, s) => el.sdk.hasPermission('projectSettings') && !s.editMode,
      text: (el, s) => (s.editMode ? 'Cancel' : 'Edit'),
      onClick: (ev, el, s) => {
        s.update({
          editMode: !s.editMode,
          successMessage: '',
          errorMessage: ''
        })
      }
    },
    ActionButtons: {
      extends: 'Flex',
      flow: 'x',
      gap: 'B1',
      hide: (el, s) => !s.editMode,
      SaveButton: {
        extends: 'ContinueButton',
        padding: 'Z2 C1',
        theme: 'primary',
        text: 'Save Changes',
        icon: 'save',
        onClick: async (ev, el, s) => {
          try {
            // Collect updated project data
            const updatedData = {
              name: s.projectName,
              access: s.access,
              visibility: s.visibility,
              designTool: s.designTool,
              isSharedLibrary: s.isSharedLibrary,
              seats: s.seats
            }

            // Add password if needed
            if (s.visibility === 'password-protected' && s.projectPassword) {
              updatedData.projectPassword = s.projectPassword
            }

            // Call API to update project
            const result = await el.sdk.updateProject(
              s.projectId,
              updatedData
            )

            if (result) {
              s.update({
                successMessage: 'Project updated successfully!',
                errorMessage: '',
                editMode: false,
                updatedAt: new Date().toISOString()
              })

              // Update root state
              const rootState = el.getRootState()
              const {
                userId,
                authToken,
                projectId,
                appKey: projectKey
              } = rootState

              try {
                await el.call('updateUserSession', {
                  authData: {
                    userId,
                    authToken
                  },
                  projectId,
                  projectKey
                })
              } catch (error) {
                console.error('[Projects] Error in updateUserSession:', error)
              }

              // trigger UI update
              rootState.update({}, {
                preventUpdate: ['Playground']
              })
            } else {
              throw new Error('Failed to update project')
            }
          } catch (error) {
            s.update({
              errorMessage: `Error: ${
                error.message || 'Failed to update project'
              }`,
              successMessage: ''
            })
          }
        }
      },
      CancelButton: {
        extends: 'ContinueButton',
        padding: 'Z2 C1',
        theme: 'transparent',
        text: 'Cancel',
        onClick: (ev, el, s) => {
          s.update({
            editMode: false,
            successMessage: '',
            errorMessage: ''
          })
        }
      }
    }
  },
  Line: {
    width: '100%',
    margin: 'C1 - C1'
  },
  MetaInfo: {
    extends: 'Flex',
    gap: 'C C3',
    width: '100%',
    flow: 'row wrap',
    childExtends: 'Group',
    childProps: {
      width: 'G'
    },
    children: [
      {
        Title: {
          text: 'Created:',
          fontWeight: 'bold'
        },
        Strong: {
          text: (el, s) => {
            const date = new Date(s.createdAt)
            return date.toLocaleString()
          }
        }
      },
      {
        Title: {
          text: 'Last Updated:',
          fontWeight: 'bold'
        },
        Strong: {
          text: (el, s) => {
            const date = new Date(s.updatedAt)
            return date.toLocaleString()
          }
        }
      }
    ]
  },
  Line_1: {
    width: '100%',
    margin: 'C1 - C1'
  },
  Members: {
    if: (el) => el.sdk.hasPermission('projectSettings'),
    extends: 'Flex',
    flow: 'y',
    Hgroup: {
      extends: 'Flex',
      flow: 'y',
      gap: 'Y',
      width: '100%',
      H: {
        color: 'title',
        text: (el, s) => `Members for ${s.projectName}`,
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      P: {
        text: 'Manage your project settings, team members, and more.',
        margin: '0'
      }
    },
    MembersTable: {}
  },
  Line_2: {
    if: (el) => el.sdk.hasPermission('projectSettings'),
    width: '100%',
    margin: 'C1 - C1'
  },
  DangerZoneSection: {}
}
