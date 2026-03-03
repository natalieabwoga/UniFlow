

const { Pool } = require("pg");
require("dotenv").config();
const dns = require("dns");

// Removed dns.setDefaultResultOrder("ipv4first"); as Supabase DBs are IPv6 only.

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;