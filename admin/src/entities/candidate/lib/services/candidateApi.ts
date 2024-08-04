import { mainApi } from '@store/api/mainApi.ts';

export const candidateApi = mainApi.injectEndpoints({
    endpoints: build => ({
        getCandidates: build.query({
            query: () => ({
                url: '/candidates',
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetCandidatesQuery } = candidateApi;