class ReferencesService {
  getCounterCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObj = object
    return newObj;
  }

  getCounterWithoutCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObj = Object.create(object)
    return newObj;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObj = JSON.parse(JSON.stringify(object))
    return newObj;
  }

}

module.exports = ReferencesService;
