import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'id',
  normalizeFindAllResponse(store, type, payload) {
      return {
          data: payload.map((el) => {
            return {
              id: el.id,
              type: type.modelName,
              attributes: { 
                name: el.name
               }
            }
          })
      };
  }
});