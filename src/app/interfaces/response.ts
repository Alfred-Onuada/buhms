import { Hall } from "./hall";
import { Room } from "./room";

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