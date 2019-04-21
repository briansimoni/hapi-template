const { expect } = require('chai');
const PetDatabase = require('../src/resources/PetDatabase');

const sequelizeFake = {
  type: 'object',
  sync: function() {
    return Promise.resolve();
  },
  options: {
    define: function() {},
  },
  runHooks: function() {},
  isDefined: function() {},
  normalizeAttribute: function() {},
  define: function() {},
}

const fakeModels = {
  Pet: {
    initCalled: false,
    create: function(petObj) {
      return Promise.resolve(petObj);
    },
    init: function() {
      this.initCalled = true;
    }
  }
}

describe('Pet Database tests', () => {
  it('creates a new pet', async () => {
    db = new PetDatabase(sequelizeFake);
    const dog = await db.createPet({name: 'asdf'});
    expect(db.models.Pet.initCalled).to.be.true;
    expect(dog.name).to.be.equal('asdf');
  });
});