import dbSqlite from '../dbFile/dbFile.js';

export function insertUser(nome, nascimento){
    const query = dbSqlite.prepare('INSERT INTO user (nome, nascimento) VALUES (?, ?)');
    const response = query.run(nome, nascimento);
    return response;
}

export function selectUserById(id){
    const query = dbSqlite.prepare('SELECT * FROM user WHERE id = ?;');
    const response = query.get(id);
    return response;
}

export default class User {
    #id = null;
    #nome = null;
    #nascimento = null;

    constructor(nome, nascimento, id){
        if(id){
            
        }
    }
}