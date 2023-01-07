export type Worker = {
    id: string;
    name: string;
    workedTime: Time;
    type: TypeOfWorker;
};

type Time = {
    workedHours: string;
    workedDays: string;
    holidays: string;
};

export type TypeOfWorker = 'Engineer' | 'Employee';