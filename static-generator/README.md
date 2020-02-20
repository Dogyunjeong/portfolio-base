# Static generator

## About

  This static generator is motivated due to restrictions and difficulties of wordpress.

  Wordpress is a great tool. But it has some limitations such as who has no prgromatic undestanding has difficulties to use and set it up, Or there is simple way to build a site but limited compare to pages developed by web developers. And there is restrictions due to rely on a theme. Theme is nice but user has less freedom of customizing as theme is for entire of a site. Because of this reason, themes might not be perfect as managed by limited peope and theme can be huge.

  Alternatively, There is a tools like Wix. Wix does solve a lot problem of wordpress. However, it leads another problem. Theme itself is way simpler than wordpress ans has more limitation of functionalities while achiving more customizable appearance. 

  Wix interface is still rely on programmatic understanding and it doesn't give enough freedom of customizing.

  Therefore, We currently have two problem
  1. Customizing apperance without giving up functionalities.
  2. Stable functionalities of theme or plugins.

### Solution

  Wordpress, wix and etc paradigme is rely on site or page. But in web developong we have moved from pages to components.

  This paradigm changes can be applied to web page generating as well. We will split dow theme into components and layouts(in here components and layouts are referred to components). Users can combines components and layouts. Developers can create components as a plugin or theme. In this approach, developer can use any functionalities of react and npm modules.(We already have an experience from codepen. In codepen, developer can choose which modules want to use)

  We have strong tool of SPA such as react. We can allow user can customizing each components with a CSS/LESS like how codepen dose.

  - We offers a SaaS to create a web pages and share components.
  - Developers develope components and share or sell.
  - Users can create web site with combining components and style pages with CSS or layout tools which we will offer.



## Structure and important

MPA with two server.
- Builder Web app: This allows user to build a page with combining layouts and components.
- Generator Web server: Building static web page with configured template by Builder Web app. Then upload static web page to static hosting server like S3
- Builder Web server: This is storing point of all the customized components and API server for Builder web app.


### Folder structure

- common: containers all sharable things except configs.
    - types: Most important and fundamental part of the entire app
    - services: Contains basic business logics.
- custom: This components should be stored in DB. And we don't use containers/components approach here. All considers as a component.
- builder: Contain Builder web app
- generator: Static generator server. for convenient we are using SSR while developing
- configs: Basically all configs will be store in this folder.

### Custom component structures

Common terminology of containers and components are not applied in here.
So all word definition is different with common understanding of SPA/MPA

- Component: indicate all of components or containers in common way.
  - area component: This component is most basic component which will defined area for set of components
  - content components: This is component which contains functionalities. It doesn't allowed to add building component.
  - container components: has functionalities or organized looks and can add more building components in chosen area.
- Layout: **Need to be redesign**
  - old definition: component which has footer, header and nav.
  - new definition: it seems layout is a special container component which hold footer and header

#### Custom Component in building Mode

All custom components must have building mode.

##### Structure.

1. When the custom components can container components.
  - child components will be built with 'buildingTools.AddComponent'. AddComponent will return **component template** with onAdded function. The custom component should update the template immediately, so changes will be shown in UI

##### Props for building moe
  - build - boolean: to distinguish current mode is building mode or not. When it is not a building mode, It will be undefined or false.
  - buildingTools: the set of building tools.



## History of decision.



### About Custom component

1. Custom components are a set of building and displaying component.
  - in building mode, Custom component will receive set of Building tools which the platform provide. But this will not limiting custom components potential. Custom component can have its own building tools.
  - As it is set of two component. the concern is that expecting there are two components or one wrapping component which contains the two components. **Currently I decide to expect there is only one wrapping component.**  The reason is that. 1. This will allow us to receive a module as a component set. 2. Custom component will have full freedom for developing.


### About types

1. Is build type builder specific local type or global common type?
  - Building tools can be a custom component's prop. In this term, build type should be a common type.