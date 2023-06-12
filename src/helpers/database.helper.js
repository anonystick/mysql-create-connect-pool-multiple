'use strict'

/**
     * Convert mảng sang chuỗi query
     * @param params
     * @returns {string}
     */
const paramToString = (params) => {
    var paramStr = "";
    var count = params.length;
    for (var idx = 0; idx < count; idx++) {
        if (idx == count - 1) {
            paramStr += JSON.stringify(params[idx]);
        } else {
            paramStr += JSON.stringify(params[idx]) + ", ";
        }
    }
    return paramStr;
}

/**
 * Tạo câu query
 * @param fncName
 * @param params
 * @returns {string}
 */
const buidQuery = (fncName, params) => {
    return fncName + "(" + paramToString(params) + ")";
}


const executeQuery = async ({ pool, procedureName, params = [] }) => {
    try {
        const query = buidQuery(`CALL ${procedureName}`, params);

        console.log(`Params to exetuce query:`, query)
        const [results, fields, rows] = await pool.query(query, params);
        // const rsQuery = JSON.parse(JSON.stringify(rows));
        // console.log(`rows:`, results[0], rows)

        return results[0]
    } catch (error) {
        throw new Error(`Failed to execute ${procedureName} query: ${error.message}`);
    }
}

const executeWithConnection = async ({ pool, procedureName, params = [] }) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const query = buidQuery(`CALL ${procedureName}`, params);
        console.log(`Params to executeWithConnection:`, query)
        const [rows] = await connection.query(query, params);
        const rsQuery = JSON.parse(JSON.stringify(rows));
        console.log(`::`, rows, rsQuery)
        return rows;
    } catch (error) {
        throw new Error(`Failed to execute ${procedureName} with connection: ${error.message}`);
    } finally {
        if (connection) {
            connection.release();
        }
    }
}


module.exports = {
    executeWithConnection,
    executeQuery
}