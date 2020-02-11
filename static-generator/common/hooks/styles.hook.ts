import { makeStyles as MMakeStyles } from '@material-ui/core/styles';

export const makeStyles = (styleToMake: any) => MMakeStyles(styleToMake)
export const useStyles = (styleToMake: any) => {
    return makeStyles(styleToMake)({})
}

export default useStyles