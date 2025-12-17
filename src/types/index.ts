export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details: unknown;
}

// Todo Types
export interface CreateTodoDTO {
  title: string;
  description?: string;
  dueData?: string;
  priority?: "LOW" | "MEDIOUM" | "HIGH" | "URGENT";
  completed?: boolean;
}

export interface UpdateTodoDTO extends Partial<CreateTodoDTO> {}

export interface TodoQueryParams {
  page?: number;
  limit?: number;
  completed?: boolean;
  priority?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// User types
export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
}
