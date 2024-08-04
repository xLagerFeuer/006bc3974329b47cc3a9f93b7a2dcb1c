import { mainApi } from '@store/api/mainApi.ts';

export const vacancyApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        getVacancies: build.query({
            query: () => ({
                url: '/vacancies',
                method: 'GET',
            }),
        }),
    }),
});
export const { useGetVacanciesQuery } = vacancyApi;