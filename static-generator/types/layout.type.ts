namespace LayoutTypes {
  export interface navItem {
    icon: string
    label: string
    to: string
  }
  export type navItems = navItem[]

  export interface header {
    title?: string
    navItems?: navItems
  }

  export interface footer {
    rightHolder?: string
    createdAt?: Date
  }
}

export default LayoutTypes