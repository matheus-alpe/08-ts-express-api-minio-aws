export function getFileExtension(fileName: string) {
  const splittedName = fileName.split('.')
  return splittedName[splittedName.length - 1]
}
