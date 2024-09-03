/* exported setValue */
function setValue(
  object: Record<string, unknown>,
  key: string,
  value: unknown
): unknown {
  return (object[key] = value);
}
