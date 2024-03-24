import { Hall } from "./hall";

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