const { Pool } = require('pg');
const pool = new Pool({ database: 'chameleon' });

require('dotenv').config();

module.exports = pool;