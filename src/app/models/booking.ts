import { firestore } from "firebase";

export interface Booking {
  id: string;
  createdAt: firestore.Timestamp;
  memberId: string;
  resourceId: string;
  approvedDate: firestore.Timestamp;
  approverId: string;
  start: firestore.Timestamp;
  end: firestore.Timestamp;
}
