export interface ApiResponse<T> {
  data: T | undefined;
  success: boolean;
  message: string;
  errors: string | string[];
  errorType?: string;
  meta?: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}
