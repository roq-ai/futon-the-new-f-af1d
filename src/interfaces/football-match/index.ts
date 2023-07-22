import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FootballMatchInterface {
  id?: string;
  update: string;
  score: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FootballMatchGetQueryInterface extends GetQueryInterface {
  id?: string;
  update?: string;
  user_id?: string;
}
