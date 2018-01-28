export default function equalByKeys(objA, objB, ...keys) {
  return !keys.some(key => objA[key] !== objB[key])
}
