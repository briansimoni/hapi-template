'use strict';

const Sequelize = require('sequelize');
const Hapi = require('hapi');
const PetDatabase = require('./resources/PetDatabase');

const init = async () => {

  const db = new Sequelize('pets', 'root', 'development', {
    host: 'mysql',
    dialect: 'mysql'
  });
  const petDatabase = new PetDatabase(db);

  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      try {
        const pet = await petDatabase.createPet({name: "dog!"});
        return 'Hello World!!!!!!!!!!!!!!' + pet.toJSON().name;
      } catch(err) {
        console.log(err);
      }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();