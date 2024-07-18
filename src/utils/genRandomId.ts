export default function generateUniqueID(length = 10) {
  // Use cryptographically secure random values if available
  const crypto = window.crypto;
  let result;
  if (crypto && crypto.getRandomValues) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    result = array.reduce(
      (str, byte) => str + String.fromCharCode(byte + 65),
      ""
    );
  } else {
    // Fallback for browsers without crypto
    result = Math.random()
      .toString(36)
      .slice(2, length + 2);
  }
  return result.toUpperCase();
}
