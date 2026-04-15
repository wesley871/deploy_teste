import 'dotenv/config';
import { DatabaseSync } from 'node:sqlite';

export default new DatabaseSync(process.env.SQLITEFILE)