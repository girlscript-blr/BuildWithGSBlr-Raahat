class DB {
    key;
    schema;

    constructor(key, schema) {
        if (typeof key !== 'string' || !Array.isArray(schema) || key.length === 0 || schema.length === 0) {
            throw new Error('Bad parameter "key" or "schema"')
        }
        this.key = key
        this.schema = schema
    }

    insert(entity) {
        if (typeof entity !== 'object' || Object.keys(entity).length === 0 || Object.keys(entity).length !== this.schema.length) {
            throw new Error('Bad parameter "entity"')
        }

        if (!this.isSameKeys(entity)) {
            throw new Error('The entity object is not of the same type as the schema')
        }

        const localStorageItem = window.localStorage.getItem(this.key)

        if (localStorageItem === null) {
            window.localStorage.setItem(this.key, JSON.stringify([ entity ]))
        } else {
            const arrayOfEntity = JSON.parse(localStorageItem)
            arrayOfEntity.push(entity)
            window.localStorage.setItem(this.key, JSON.stringify(arrayOfEntity))
        }
    }

    isSameKeys(entity) {
        const entityKeys = Object.keys(entity)
        const checkEntityKeys = new Set()
        this.schema.map(schemaKey =>
            entityKeys.map(entityKey =>
                entityKey === schemaKey && checkEntityKeys.add(entityKey)
            )
        )

        return this.schema.length === checkEntityKeys.size;

    }

    findAll() {
        return JSON.parse(window.localStorage.getItem(this.key))
    }
}

export default DB



