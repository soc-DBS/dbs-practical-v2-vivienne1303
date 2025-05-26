const { query } = require('../database');
const { EMPTY_RESULT_ERROR, SQL_ERROR_CODE, UNIQUE_VIOLATION_ERROR } = require('../errors');

module.exports.create = function create(code, name, credit) {
const sql = 'CALL create_module($1, $2, $3)';
return query(sql, [code, name, credit])
.then(function (result) {
console.log('Module created successfully');
})
.catch(function (error) {
if (error.code === SQL_ERROR_CODE.UNIQUE_VIOLATION) {
throw new UNIQUE_VIOLATION_ERROR(`Module ${code} already exists!
Cannot create duplicate.`);
}
throw error;
});
};

module.exports.retrieveByCode = function retrieveByCode(code) {
    const sql = `SELECT * FROM module WHERE mod_code = $1`;
    return query(sql, [code]).then(function (result) {
        const rows = result.rows;

        if (rows.length === 0) {
            // Note: result.rowCount returns the number of rows processed instead of returned
            // Read more: https://node-postgres.com/apis/result#resultrowcount-int--null
            throw new EMPTY_RESULT_ERROR(`Module ${code} not found!`);
        }

        return rows[0];
    });
};

module.exports.deleteModule = function deleteModule(code) {
  return query('CALL sp_delete_module($1)', [code])
    .then(function (result) {
      console.log('Module deleted successfully');
    })
    .catch(function (error) {
      throw error;
    });
};

module.exports.updateModule = function updateModule(code, name, credit) {
  return query('CALL sp_update_module($1, $2, $3)', [code, name, credit])
    .then(function (result) {
      console.log('Module updated successfully');
    })
    .catch(function (error) {
      throw error;
    });
};


module.exports.retrieveAll = function retrieveAll() {
    const sql = `SELECT * FROM module`;
    return query(sql).then(function (result) {
        return result.rows;
    });
};

module.exports.retrieveBulk = function retrieveBulk(codes) {
    const sql = 'SELECT * FROM module WHERE code IN ($1)';
    return query(sql, [codes]).then(function (response) {
        const rows = response.rows;
        const result = {};
        for (let i = 0; i < rows.length; i += 1) {
            const row = rows[i];
            const code = row.code;
            result[code] = row;
        }
        return result;
    });
};
