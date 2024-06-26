import { Complaint } from "./complaint";
import { Hall } from "./hall";
import { Room } from "./room";
import { Student } from "./student";

export interface ApiResponse {
  statusCode: number;
  data: string;
  message: string;
  status: boolean;
}

export interface GetHallsResponse {
  statusCode: number;
  data: Hall[];
  message: string;
  status: boolean;
}

export interface GetRoomsResponse {
  statusCode: number;
  data: Room[];
  message: string;
  status: boolean;
}

export interface GetComplaintsResponse {
  statusCode: number;
  data: Complaint[];
  message: string;
  status: boolean;
}

export interface fixComplaintResponse {
  statusCode: number;
  data: Complaint[];
  message: string;
  status: boolean;
}

export interface GetStudentsResponse {
  statusCode: number;
  data: Student[];
  message: string;
  status: boolean;
}