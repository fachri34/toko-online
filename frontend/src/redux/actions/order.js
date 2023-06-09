import axios from 'axios'
import {url} from "../../Api"


export const getAllOrdersOfUser = (userId) => async (dispatch) => {
    try{
        dispatch({
            type:"getAllOrdersUserRequest"
        })

        const {data} = await axios.get(`${url}/order/get-all-orders/${userId}`)

        dispatch({
            type: "getAllOrdersUserSuccess",
            payload: data.orders
        })
    }catch(error){
        dispatch({
            type:"getAllOrdersUserFailed",
            payload: error.response.data.message
        })
    }
}

export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
    try{
        dispatch({
            type:"getAllOrdersShopRequest"
        })

        const {data} = await axios.get(`${url}/order/get-seller-all-orders/${shopId}`)

        dispatch({
            type:"getAllOrdersShopSuccess",
            payload: data.orders
        })
    }catch(error){
        dispatch({
            type:"getAllOrdersShopFailed",
            payload: error.response.data.message
        })
    }
}

export const getAllOrdersOfAdmin = () => async (dispatch) => {
    try {
      dispatch({
        type: "adminAllOrdersRequest",
      });
  
      const { data } = await axios.get(`${url}/order/admin-all-orders`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "adminAllOrdersSuccess",
        payload: data.orders,
      });
    } catch (error) {
      dispatch({
        type: "adminAllOrdersFailed",
        payload: error.response.data.message,
      });
    }
  }