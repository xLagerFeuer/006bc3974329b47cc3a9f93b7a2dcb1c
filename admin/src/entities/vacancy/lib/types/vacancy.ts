export enum VacancyType {
    LOW = 'low',
    HIGH = 'high',
}

export interface IVacancy {
    companyName: string;
    jobTitle: string;
    count?: string;
    location: string;
    workTime: string;
    salary: string;
    experience?: string;
    date?: string;
    description: string;
    type: VacancyType;
}