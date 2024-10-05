import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/relativeTime';
import numeral from 'numeral';

dayjs.extend(customParseFormat);

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  // message?: string,
) => {
  if (id) {
    navigator.clipboard.writeText(val);
    // message ? showAlert(message) : '';
  }
};

export const readableDateTime = (now: string, time?: boolean) => {
  const parsedDate = dayjs(now, 'DD/MM/YYYY');

  if (!parsedDate) {
    return 'Invalid Date';
  }
  // Format the parsed date to 'MMMM D, YYYY h:mm A'
  return time
    ? parsedDate.format('MMMM D, YYYY h:mm A')
    : parsedDate.format('MMMM D, YYYY');
};

export const readableTime = (now: string) => {
  const parsedDate = dayjs(now, 'HH:mm');

  if (!parsedDate) {
    return 'Invalid Date';
  }
  // Format the parsed date to 'MMMM D, YYYY h:mm A'
  return parsedDate.format('h:mm A');
};

export const formatTimeAgo = (now: string) => {
  return dayjs(now).fromNow();
};

export const formatNumInThousands = (
  value?: number | string,
  kmVal?: boolean,
) => {
  // Format using numeral.js
  return kmVal
    ? numeral(value).format('0a')
    : numeral(value).format('0,0.0[00]');
};

export const formatNumInThousandV2 = (value?: number | string) => {
  // Format using numeral.js
  return numeral(value).format('0.00a');
};
