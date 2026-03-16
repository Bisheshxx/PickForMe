export interface ApiResponse<T> {
  data: T | undefined;
  success: boolean;
  message: string;
  errors: string | string[];
  errorType?: string;
  meta?: Meta;
}

export interface Meta {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface PaginationQuery {
  page: number;
  pageSize: number;
}
