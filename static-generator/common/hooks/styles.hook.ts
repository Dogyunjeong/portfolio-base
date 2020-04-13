import { setSrc } from './../utilities/common.util'
import { makeStyles as MMakeStyles } from "@material-ui/core/styles"
import _ from "../utilities/lodash.util";

const generateStylesWithStatic = (styleToMake?: {[key:string]: any}) => {
  if (!_.isObject(styleToMake)) {
    return {}
  }
  const result: any = {};
  _.forEach(styleToMake, (value, key) => {
    if (_.isObject(value)) {
      const innerResult = generateStylesWithStatic(value);
      result[key] = innerResult;
      return
    }
    if (key === 'backgroundImage' || key === 'background-image') {
      const match = /url\(\"(.*)\"\)/gi.exec(value)
      const url = _.get(match, '[1]', value)
      result[key] = `url("${setSrc(url)}")`
      return
    }
    result[key] = value
  });
  return result
};

export const makeStyles = (styleToMake: any) => {
  const generateStyleObj = generateStylesWithStatic(styleToMake)
  return MMakeStyles(generateStyleObj)
};
export const useStyles = (styleToMake: any) => {
  return makeStyles(styleToMake)({});
};

export default useStyles;
