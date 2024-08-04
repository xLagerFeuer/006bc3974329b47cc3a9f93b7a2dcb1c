import { mainApi } from '@store/api/mainApi.ts';

export const interviewApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getInterviews: build.query({
            query: () => ({
                url: '/interviews',
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetInterviewsQuery } = interviewApi;