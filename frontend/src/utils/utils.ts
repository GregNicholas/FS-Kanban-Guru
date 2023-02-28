export function deepCopy<T>(object: T): T {
    if (typeof object !== 'object' || object === null) {
      // If the object is not an object or is null, return it as-is
      return object;
    }
    // Handle arrays
    if (Array.isArray(object)) {
      return object.map(item => deepCopy(item)) as unknown as T;
    }
    // Handle objects
    const result: Partial<T> = {};
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        result[key as keyof T] = deepCopy(object[key as keyof T]) as T[keyof T];
      }
    }
    return result as T;
  }