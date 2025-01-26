export interface Ipass {
  id: string;
  fullname: string;
  checkin: boolean;
  checkindate: number | null;
  children: Ichildern[] | null;
}

export interface Ichildern {
  name: string;
  age: number;
}