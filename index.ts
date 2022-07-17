import * as pluralize from 'pluralize';
import CuteStringUtil from './cute';

export function getPlural(str: any): string
{
   return pluralize.plural(str);
}

export { CuteStringUtil as default };