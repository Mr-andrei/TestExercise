import { useAppSelector } from '../../utills';

import { Worker } from '../../types';
import { Filter } from './WorkersList';

export const useFilterWorkers = (filterFlag: Filter): Worker[] => {
    const { workers } = useAppSelector(state => state.workerReducer);

    if (filterFlag === 'Engineer') {
        return workers.filter(({ type }) => type === 'Engineer');
    } else if (filterFlag === 'Employee') {
        return workers.filter(({ type }) => type === 'Employee');
    } else return workers;
};