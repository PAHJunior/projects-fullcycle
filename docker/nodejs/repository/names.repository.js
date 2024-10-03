const pool = require('../infra/database');

class NameRepository {
  static async createTable() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS names (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL
        );
      `);
    } catch (err) {
      console.error('Erro ao criar a tabela:', err);
      throw err;
    }
  }

  static async insertName(name) {
    try {
      await pool.query('INSERT INTO names (name) VALUES ($1)', [name]);
    } catch (err) {
      console.error('Erro ao adicionar nome:', err);
      throw err;
    }
  }

  static async getNames() {
    try {
      const names = await pool.query('SELECT name from names');

      return names.rows.map(row => row.name); 
    } catch (err) {
      console.error('Erro ao bucar os nomes:', err);
      throw err;
    }
  }
}

module.exports = NameRepository;
