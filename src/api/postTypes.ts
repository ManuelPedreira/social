//procesado con https://quicktype.io/
//Source type: JSON
//Language: TypeScript
// *Interfaces only
// *Verify JSON.parse results at runtime
// *Use types instead of interfaces

export type Post = {
  userId: string;
  id?: string;
  title: string;
  body: string;
  user?: User;
  coments_count?: number;
};

export type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

/* export const RequestStatus = Object.freeze({
  IDLE: Symbol(),
  OK: Symbol(),
  LOADING: Symbol(),
  ERROR: Symbol(),
}); */

/* export enum RequestStatus {
  IDLE,
  OK,
  LOADING,
  ERROR,
} */

export type Pagination = {
  _page?: number;
  _limit?: number;
  _start?: number;
  _end?: number;
};
