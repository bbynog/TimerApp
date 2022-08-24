/**
 * Remove caracteres inválidos
 * @param value
 */
export function removeInvalidCharacters(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '');
}
