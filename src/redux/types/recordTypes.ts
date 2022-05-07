import { Record } from '../interfaces/record';

export const GET_RECORDS = 'GET_RECORDS';

export interface GetRecordStateType {
  records: Record[];
}

interface GetRecordsActionType {
  type: typeof GET_RECORDS;
  payload: Record[];
}
export type RecordActionTypes = GetRecordsActionType;