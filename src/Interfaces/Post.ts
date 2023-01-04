import { Tribe } from "./Tribe";

export interface Post {
  id: number;
  title: String;
  post_tribes: Array<Tribe>;
}