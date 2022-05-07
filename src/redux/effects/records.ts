import { getRecordsAction } from '../actions/recordsAction';
import { Dispatch } from 'redux';
import { RecordActionTypes } from '../types/recordTypes';


export const getRecords = () => {
  return function (dispatch: Dispatch<RecordActionTypes>) {
    const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(POST_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getRecordsAction(data));
        return data;
      });
  };
};