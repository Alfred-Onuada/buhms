export interface Complaint {
  id: string;
  title: string;
  description: string;
  type: string;
  isFixed: boolean;
  roomId: string;
  studentId: string;
}
