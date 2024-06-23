// TODO: Кандидат на рефакторинг
import { START_DATE } from '~src/constants';

function formatDate(date: Date): string {
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  return `${month}.${year}`;
}
// Helper function to calculate the difference in years and months between two dates
function calculateYearsAndMonths(fromDate: Date, toDate: Date): { years: number, months: number } {
  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth() + (toDate.getDate() < fromDate.getDate() ? -1 : 0);

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

// Formats the time period into a readable string format
function formatTimePeriod(years: number, months: number): string {
  const yearLabel = years === 1 ? 'year' : 'years';
  const monthLabel = months === 1 ? 'month' : 'months';

  const yearPart = years > 0 ? `${years} ${yearLabel}` : '';
  const monthPart = months > 0 ? `${months} ${monthLabel}` : '';

  return [yearPart, monthPart].filter(part => part).join(' and ') || 'less than a month';
}

// Calculates the time since a given date to now
function timeSince(date: Date): string {
  const now = new Date();
  const { years, months } = calculateYearsAndMonths(date, now);
  return formatTimePeriod(years, months);
}

// Calculates the period between two dates
export function getPeriodBetweenDates(startDate: Date, endDate: Date): string {
  const { years, months } = calculateYearsAndMonths(startDate, endDate);
  return formatTimePeriod(years, months);
}

export function getPeriodWithDuration(startDate: Date, endDate?: Date): string {
  const periodDescription = getPeriodBetweenDates(startDate, endDate || new Date());
  const startFormatted = formatDate(startDate);
  const endFormatted = endDate ? formatDate(endDate): 'present';
  return `${startFormatted} - ${endFormatted} (${periodDescription})`;
}
// Exporting the function to get the experience period since START_DATE
export const getExperiencePeriod = () => timeSince(START_DATE);
