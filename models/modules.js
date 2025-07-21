const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.create = function create(code, name, credit) {
  return prisma.module.create({
    data: {
      modCode: code,
      modName: name,
      creditUnit: credit
    }
  }).then(function (module) {
    return module;
  }).catch(function (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        // Custom error message with the duplicate module code
        //delete or update is error.code === 'P2025'
        console.log('There is a unique constraint violation, module has already been created before.');
      }
    }
    throw error;
  });
};

module.exports.updateByCode = function updateByCode(code, credit) {
return prisma.module.update({
data: {
      modCode: code,
      creditUnit: credit
    }
}).then(function (module) {
 return module;
}).catch(function (error) {
// Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2025
// TODO: Handle Prisma Error, throw a new error if module is not found
if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        console.log('There is a unique constraint violation, module cannot be updated.');
      }
    }
});
};

module.exports.deleteByCode = function deleteByCode(code, credit) {
return prisma.module.delete({
data: {
      modCode: code,
    }
}).then(function (module) {
 return module;
}).catch(function (error) {
// Prisma error codes: https://www.prisma.io/docs/orm/reference/error-reference#p2025
// TODO: Handle Prisma Error, throw a new error if module is not found
if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        console.log('There is a unique constraint violation, module cannot be deleted.');
      }
    }
});
};

module.exports.retrieveByCode = function retrieveByCode(code) {
  return prisma.module.findUnique({
    where: {
      modCode: code
    }
  }).then(function(module) {
    if (!module) {
      // Throw an error if module not found
      const error = new Error(`Module with code ${code} not found.`);
      error.code = 'NOT_FOUND';
      throw error;
    }
    return module;
  }).catch(function(error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle Prisma errors here if needed
      // P2025 usually applies for update/delete, not findUnique
    }
    throw error; // re-throw other errors
  });
};