module.exports = {
  dialect: 'postgres',
  host: 'localhost', // Alterado de 'localhost' para 'db' para se conectar ao serviço do Docker Compose.
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'workmed',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};