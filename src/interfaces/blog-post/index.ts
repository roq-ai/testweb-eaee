import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BlogPostInterface {
  id?: string;
  title: string;
  content: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BlogPostGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
}
