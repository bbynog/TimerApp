import { DateFormat } from 'types';
import moment, { Moment } from 'moment';

export const formatDateTo = (
  format: DateFormat,
  date?: Date | string | Moment
): string => {
  switch (format) {
    case DateFormat.EXHIBITION_TIME:
      return moment(date).format('HH:mm:ss');
    case DateFormat.EXHIBITION_TIME_MILLIES:
      return moment(date).format('HH:mm:ss:SS');
    case DateFormat.LOCAL_DATE:
      return moment(date).format('YYYY-MM-DD');
    case DateFormat.LOCAL_DATE_TIME:
      return moment(date).format('YYYY-MM-DDTHH:mm:ss.SSSSSS');
    case DateFormat.EXHIBITION_DATE:
      return moment(date).format('DD/MM/YYYY');
    case DateFormat.EXHIBITION_DATE_TWO_DIGITS:
      return moment(date).format('DD/MM/YY');
    case DateFormat.EXHIBITION_DATE_TIME:
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    case DateFormat.EXHIBITION_DATE_TIME_TWO_DIGITS:
      return moment(date).format('DD/MM/YY HH:mm:ss');
    default:
      return moment().format();
  }
};
