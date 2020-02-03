import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import List from './List'
import ListItem, { ListItemProps } from './ListItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    'nested-1': {
      paddingLeft: theme.spacing(4)
    },
    'nested-2': {
      paddingLeft: theme.spacing(8)
    },
    'nested-3': {
      paddingLeft: theme.spacing(12)
    },
    'nested-4': {
      paddingLeft: theme.spacing(16)
    }
  })
);

export interface ListData extends ListItemProps {
  listData?: ListData[]
}
export interface FormattedListProps {
  listData?: ListData[]
  nestedLevel?: number
}

const FormattedList: React.SFC<FormattedListProps> = ({
  listData = [], nestedLevel = 0
}) => {
  const classes = useStyles({})
  const nestedClass: string = classes[`nested-${nestedLevel}` as 'nested-1']
  if (listData.length < 1) {
    return null
  }
  return (
    <List className={classes.root}>
      {listData.map((listItem, idx) => {
        if (listItem.listData) {
          return (
            <NestedList key={`formatted-list-level-${nestedLevel}-${idx}`} listItem={listItem} nestedLevel={nestedLevel} nestedClass={nestedClass} />
          )
        }
        return <ListItem className={nestedClass} key={`formatted-list-level-${nestedLevel}-${idx}`} {...listItem} />
      })}
    </List>
  )
}

interface NestedListProps {
  listItem: ListData
  nestedLevel: number
  nestedClass?: string
}

const NestedList: React.SFC<NestedListProps> = ({ listItem = {}, nestedLevel = 0, nestedClass }) => {
  const [open, setOpen] = useState(false)
  const handleClickNestedItem = () => setOpen(!open)
  return (
    <>
      <ListItem
        className={nestedClass}
        open={open}
        onClick={handleClickNestedItem}
        {...listItem}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {listItem.listData && (
          <FormattedList listData={listItem.listData} nestedLevel={nestedLevel + 1}/>
        )}
      </Collapse>
    </>
  )
}

export default FormattedList;
