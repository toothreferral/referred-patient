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
