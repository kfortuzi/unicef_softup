import dayjs, { Dayjs } from "dayjs"

/** 
  * This function checks if a date string is valid.
  * @param date: string | null | undefined - The date string to check.
  * @returns
  * : Dayjs | null | undefined - The date string as a Dayjs object if valid, otherwise null or undefined.
*/

function isValidDate(date: string | null | undefined): Dayjs | null | undefined {
  if (!date) return undefined;
  const isValid = dayjs(date).isValid();
  if (!isValid) return undefined;

  return dayjs(date);
}

/** 
  * This function formats a date string into a human-readable format.
  * @param date: string | undefined - The date string to format.
  * @param defaultReturn
  * : string - The default return value if the date string is invalid. Default is an empty string.
  * @param format: string - The format to return the date in. Default is 'MMM YYYY'.
  * @returns: string - The formatted date string.
*/
function formatDate(
  date: string | null | undefined,
  defaultReturn: string = '',
  format: string = 'MMM YYYY'
): string{
  if (!isValidDate(date)) return defaultReturn;
  const formattedDate = dayjs(date).format(format);

  return formattedDate;
}

export { isValidDate, formatDate };