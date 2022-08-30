/** Object that holds regex patterns */
const REGEX_PATTERNS = {
  date: /^\d{4}([-])\d{2}\1\d{2}$/, // Date with the format of YYYY-MM-DD
}

/**
 * ### Util function for validating input against regex pattern
 * @param regex_pattern regex pattern  that neeeds to match the input
 * @param input string that is compared agaisnt the regex pattern
 * @returns boolean if the input matches the regex pattern, else return false
 */
function regexIsValid(regex_pattern: RegExp, input: string): boolean {
  if (regex_pattern.test(input)) {
    return true
  }
  return false
}

/**
 * @param input date string
 * @returns true if date has the form of YYYY-MM-DD, else false
 */
export function dateIsValid(input: string): boolean {
  return regexIsValid(REGEX_PATTERNS.date, input)
}

/**
 * Get the date of today in the form of yyyy-mm-dd
 * credits -> https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
 */
export function dateOfToday(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * If both input dates match the form of yyyy-mm-dd, return true. 
 * Else return false.
 */
export function startDateAndEndDatesAreValid(start_date: string, end_date: string): boolean {
  return dateIsValid(start_date) && dateIsValid(end_date) ? true : false
}
