/**
 * Remove caracteres inválidos incluindo espaços
 * @param value
 */
export function removeInvalidCharactersWithSpaces(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s/g, '');
}
