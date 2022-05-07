import {
  GET_RECORDS,
  GetRecordStateType,
  RecordActionTypes
} from '../types/recordTypes';

const initialStateGetPosts: GetRecordStateType = {
  records: []
};

export const getRecordsReducer = (
  state = initialStateGetPosts,
  action: RecordActionTypes
): GetRecordStateType => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload
      };
    default:
      return state;
  }
};
