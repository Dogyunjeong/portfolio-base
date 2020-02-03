import React from 'react';
import MList from '@material-ui/core/List';

export interface ListProps {
  className: string
}
const List: React.SFC<ListProps> = (props) => {
  return (<MList {...props}/>);
}
export default List;