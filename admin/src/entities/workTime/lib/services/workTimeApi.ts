import { mainApi } from '@store/api/mainApi.ts';

export const workTimeApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getWorkTimes: build.query({
            query: () => ({
                url: '/workTimes',
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetWorkTimesQuery } = workTimeApi;