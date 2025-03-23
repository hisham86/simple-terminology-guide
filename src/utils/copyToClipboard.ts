
/**
 * Copies the provided text to clipboard
 * @param text - The text to copy
 * @returns A promise that resolves when the text is copied
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy text: ", error);
    return false;
  }
};
