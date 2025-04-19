// src/types/api.ts

export type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
  };
  
  export type ApiError = {
    error: string;
    status: number;
  };
  