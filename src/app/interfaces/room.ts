export interface Room {
  id: string;
  roomNumber: string;
  numberAvailable: number;
  numberOfBeds: number;
  isOccupied: boolean;
  hallId: string;
  users: User[];
}

// User interface
interface User {
  id: string;
  lastName: string;
  firstName: string;
  imageUrl: string;
  matric: string;
}