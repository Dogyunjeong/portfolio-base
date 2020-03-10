import React from 'react'
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
    drawer?: CustomComponentTypes.LinkProps[]
    customStyles?: object
  }

  export interface Footer {
    rightHolder?: string
    createdAt?: Date
  }

  export interface Layout extends CustomComponentTypes.CustomComponentBase {
    header: Header
    footer: Footer
  }


  export interface HeaderProps extends CustomComponentTypes.CustomComponentProps {
    headerData: Header
    children?: React.ReactElement
    left?: React.ReactElement,
    right?: React.ReactElement,
  }

  export interface FooterProps extends CustomComponentTypes.CustomComponentProps {
    footerData: Footer
  }

  export interface LayoutProps extends CustomComponentTypes.CustomComponentProps {
    layoutData: Layout
  }
}

export const initialLayoutData: CustomLayoutTypes.Layout = {
  uuid: '',
  name: '',
  type: CustomComponentTypes.CustomComponents.layout,
  header: {},
  footer: {}
}

export default CustomLayoutTypes