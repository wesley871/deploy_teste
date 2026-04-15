import { insertUser, selectAllUsers, selectUserById } from "../../models/usersModels/usersModels.js";

export function usersController(req, res) {
  const users = selectAllUsers();
  const options = {
    title: 'Usuários',
    users: users
  }
  res.render('users', options, (erro, html) => {
    if (erro) {
      console.error(erro);
      res.end(erro.msg);
    } else {
      res.status(200);
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(html);
    }
  });

}

export function findUsersById(req, res) {
  const { id } = req.params;
  const number = Number(id);
  console.log(number)
  try {
    if (number) {
      res.status(200);
      const user = selectUserById(id)
      if (user) {
        res.json(user);
      }
      const err = new Error("Usuário não encontrado", { cause: `Não encontrado usuário com o id fornecido: ${id}` })
      throw err
    } else {
      throw new Error("Erro ao pesquisar usuário", { cause: `O ID passado não é um numero inteiro: ${id}` })
    }
  } catch (error) {
    res.status(404)
    res.json({
      message: error.message,
      cause: error.cause
    })
  }
}

export function registerUser(req, res) {
  const { nome, nascimento } = req.body;
  if (nome && nascimento) {
    const timestamp = new Date(nascimento).toLocaleString('pt-BR');
    const { lastInsertRowid } = insertUser(nome, timestamp);
    const user = selectUserById(lastInsertRowid);
    res.status(201);
    res.json(user);
  }
}