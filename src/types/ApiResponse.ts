interface ApiResponse<T> {
    success: boolean;
    data?: T;
    msg?: string;
    code?: number;
}

export type { 
    ApiResponse 
};