import { GET_RECORDS, RecordActionTypes } from '../types/recordTypes';
import { Record } from '../interfaces/record';

export const getRecordsAction = (records: Record[]): RecordActionTypes => {
  return {
    type: GET_RECORDS,
    payload: records
  };
};