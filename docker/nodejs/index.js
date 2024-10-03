require('dotenv').config({
  path: ['.env.local', '.env']
});
const express = require('express');
const app = express();
const port = 3000;
const NameRepository = require('./repository/names.repository');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

(async () => {
  try {
    await NameRepository.createTable();
    console.log('Tabela de nomes criada/verificada com sucesso.');
  } catch (err) {
    console.error('Erro ao inicializar a tabela:', err);
  }
})();

app.get('/', async (req, res) => {
  const names = await NameRepository.getNames();
  res.render('index', {
    title: 'Full Cycle - Docker',
    message: 'Full Cycle Rocks!',
    names,
  });
});

app.post('/name', async (req, res) => {
  const { name } = req.body;
  try {
    await NameRepository.insertName(name);
    res.redirect('/');
  } catch (err) {
    console.error('Erro ao salvar o nome:', err);
    res.status(500).send('Erro ao salvar o nome');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})