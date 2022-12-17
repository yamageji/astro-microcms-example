export const useConvertDate = (date: string) => {
  const [year, month, dayTime] = date.split('-');
  const [day] = dayTime.split('T');
  return `${year}.${month}.${day}`;
};
