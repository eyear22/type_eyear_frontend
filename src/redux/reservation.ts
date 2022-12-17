import * as reservationAPI from '../api/reservation';

const POST_RESERVATION = 'POST_RESERVATION';
const POST_RESERVATION_SUCCESS = 'POST_RESERVATION_SUCCESS';
const POST_RESERVATION_ERROR = 'POST_RESERVATION_ERROR';

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 보낸 우편 리스트
export const PostReservation =
  (reservationDate: string, timetableIndex: number, faceToface: boolean) => async (dispatch: any) => {
    dispatch({ type: POST_RESERVATION });
    try {
      const reservation = await reservationAPI.postReservationAPI(reservationDate, timetableIndex, faceToface);
      dispatch({ type: POST_RESERVATION_SUCCESS, reservation: reservation });
    } catch (e) {
      dispatch({ type: POST_RESERVATION_ERROR, error: e });
    }
  };

export default function reservation(state = initialState, action: any) {
  switch (action.type) {
    case POST_RESERVATION:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case POST_RESERVATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.reservation.data,
        action: action,
        error: null,
      };
    case POST_RESERVATION_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    default:
      return state;
  }
}
