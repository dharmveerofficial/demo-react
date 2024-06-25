import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employee = createApi({
  reducerPath: "employee",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:44311/api/Home/" }),
  endpoints: (builder) => ({
    getEmployee: builder.query<any, void>({
      query: () => `empData`,
    }),
    getEmployees: builder.query<any[], void>({
      query: () => `empsData`,
    }),
  }),
});

export const { useGetEmployeeQuery, useGetEmployeesQuery } = employee;
