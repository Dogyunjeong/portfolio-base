import ComponentTypes from './component.type'
declare namespace CustomLayoutTypes { // eslint-disable-line
  export interface NavItem {
    icon: string
    label: string
    to: string
  }
  export type NavItems = NavItem[]

  export interface Header {
    title?: string
    navItems?: NavItems
  }

  export interface Footer {
    rightHolder?: string
    createdAt?: Date
  }

  export interface Layout extends ComponentTypes.ComponentBase {
    header?: Header
    footer?: Footer
  }
}

export const initialLayoutData: CustomLayoutTypes.Layout = {
  uuid: '',
  type: ComponentTypes.ComponentEnum.Layout
}

export default CustomLayoutTypes