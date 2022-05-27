import {
  ALL_ITEM_FAIL,
  ALL_ITEM_REQUEST,
  ALL_ITEM_SUCCESS,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_SUCCESS,
  NEW_ITEM_REQUEST,
  NEW_ITEM_SUCCESS,
  NEW_ITEM_FAIL,
  NEW_ITEM_RESET,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  DELETE_ITEM_RESET,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_RESET,
  CLEAR_ERRORS,
} from "../Constants/itemConstant";


export const itemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case ALL_ITEM_REQUEST:
      return {
        loading: true,
        items: [],
      };
    case ALL_ITEM_SUCCESS:
      return {
        loading: false,
        items: action.payload.Items,
      };


    case ALL_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const itemDetailsReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case ITEM_DETAILS_REQUEST:
      return {
          ...state,
        loading: true,
      };

    case ITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      };

    case ITEM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newItemReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case NEW_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_ITEM_SUCCESS:
      return {
        loading: false,
        item: action.payload.item,
        success: action.payload.success,
      };

    case NEW_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NEW_ITEM_RESET: {
      return {
        ...state,
        success: false,
      };
    }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ITEM_REQUEST:
    case UPDATE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_ITEM_FAIL:
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_ITEM_RESET: {
      return {
        ...state,
        isDeleted: false,
      };
    }

    case UPDATE_ITEM_RESET: {
      return {
        ...state,
        isUpdated: false,
      };
    }

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
