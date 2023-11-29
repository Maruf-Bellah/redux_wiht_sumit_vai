





















// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const getBearerToken = () => {
//   return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTY2ZTY0OGE4ZDQ1Y2U4Y2YzZjBmNjkiLCJtZXJjaGFudCI6IjY1NjZlNjQ4YThkNDVjZThjZjNmMGY2NyIsImlhdCI6MTcwMTI1ODg4MCwiZXhwIjoxNzAxMjYyNDgwLCJ0eXBlIjoiQUNDRVNTIn0._TFRdSHmo6cqIM0fT7l2CaHTxcSq4VplDLR3VQ8WPwk";
// };

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://20.212.156.134:5050/api/v2",
//     prepareHeaders: (headers) => {
//       const token = getBearerToken();
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),

//   endpoints: (builder) => ({
//     expenseSectionList: builder.query({
//       query: (store) => ({
//         url: `/incomes-expenses/sections/${store}?type=EXPENSE`,
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const { useExpenseSectionListQuery } = apiSlice;
