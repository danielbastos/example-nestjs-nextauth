import { db } from '@root/db';
import { UserRepository } from './user';

export const client = db;
export const user = new UserRepository(db);