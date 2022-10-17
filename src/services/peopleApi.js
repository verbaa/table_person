import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
  tagTypes: ['Member'],
  endpoints: (builder) => ({
    members: builder.query({
      query: () => '/members',
      providesTags: ['Member']
    }),
    addMember: builder.mutation({
      query: (member) => ({
        url: '/members',
        method: 'POST',
        body: member
      }),
      invalidatesTags: ['Member']
    }),
    updateMember: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `/members/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Member']
    }),
    deleteMember: builder.mutation({
      query: (id) => ({
        url: `/members/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Member']
    })
  })
})

export const {
  useMembersQuery,
  useAddMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation
} = peopleApi
