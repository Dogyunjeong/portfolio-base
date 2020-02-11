import CustomComponentTypes from './customComponent.type'
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

  export interface Layout extends CustomComponentTypes.CustomComponentBase {
    header?: Header
    footer?: Footer
  }
}

export const initialLayoutData: CustomLayoutTypes.Layout = {
  uuid: '',
  name: '',
  type: CustomComponentTypes.CustomComponents.layout
}

export default CustomLayoutTypes