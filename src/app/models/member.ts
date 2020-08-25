import { firestore } from "firebase";

export interface Member {
  id: string;
  createdAt: firestore.Timestamp;
  name: string;
  address: string;
  zipcode: number;
  birthdate: firestore.Timestamp;
  email: string;
  phone: number;
}
