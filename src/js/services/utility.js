// CR: This method does not belong to Todo class. It is a utility function. Move it to a separate file
export const setTimeZone = () => {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localTime = new Date(now.getTime() - timezoneOffset);
  return localTime.toISOString();
};
