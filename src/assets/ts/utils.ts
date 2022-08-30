/**
 * Pass down an array of objects and
 * the name of the key that you want
 * to filter. If the key of the object
 * matches, push it to an empty array
 * and then return the array.
 */
export function filteredArrayBasedOnKeyOfObject(array_of_objects: Array<Object>, key_of_object: string) {
  let array_of_values = []
  for (let obj of array_of_objects) {
    // @ts-ignore
    for (const [key, value] of Object.entries(obj)) {
      if (key == key_of_object) {
        array_of_values.push(value)
      }
    }
  }
  return array_of_values
}

/**
 * Create and return an array of randomly
 * generated hex colors, based on how long
 * that array needs to be.
 *
 * Credits -> https://www.paulirish.com/2009/random-hex-color-code-snippets/
 */
export function generateArrayOfHexColors(lenght: number): Array<string> {
  let array_of_colors = []
  for (let i = 0; i < lenght; i++) {
    array_of_colors.push('#' + Math.floor(Math.random() * 16777215).toString(16))
  }
  return array_of_colors
}
