export interface AuthenticationResponse {
  statusCode: number;
  data: {
    email: string;
    token: string;
    refreshToken: string;
  };
  message: string;
  status: boolean;
}