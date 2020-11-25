export const isSameDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  // convert dates to UTC to allow comparison between timezones and DST
  return (
    date1.getUTCDate() === date2.getUTCDate() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCFullYear() === date2.getUTCFullYear()
  );
};

const isToday = date => {
  const today = new Date();
  return isSameDay(date, today);
};

const isYesterday = date => {
  const today = new Date();
  const yesterday = new Date();
  // this does conversion from one month/year to another
  yesterday.setDate(today.getDate() - 1);

  return isSameDay(date, today);
};

export const formatDate = dateString => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return 'Today';
  }

  if (isYesterday(date)) {
    return 'Yesterday';
  }

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleString('en-US', options);
};
