export function getFutureDate(days: number, startDate?: Date | null): Date {
  /**
   * @param days :number of days in the future
   * @param startDate : the start date
   */

  const futureDay = startDate ? new Date(startDate) : new Date();
  futureDay.setDate(futureDay.getDate() + days);
  futureDay.setSeconds(0);
  futureDay.setHours(0);
  futureDay.setMinutes(0);
  futureDay.setMilliseconds(0);
  return futureDay;
}
