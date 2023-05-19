export function noSpecialChars(input: string) {
  return input.replaceAll(/([^\w\s])/gim, "").trim();
}
