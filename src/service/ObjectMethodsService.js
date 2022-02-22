class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return {
      ...rawObject, 
      valueOf(){ 
        return rawObject.age 
      }
    }
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return {
      ...rawObject, 
      toString(){ 
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    }
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    return {
      ...rawObject,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
          number: rawObject.age 
        }

        return types[coercionType]
      }
    }
  }
}

module.exports = ObjectMethodsService;
