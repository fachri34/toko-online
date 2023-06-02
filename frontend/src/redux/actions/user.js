import axios from 'axios'
import { url } from '../../Api'

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest"
    })
    const { data } = await axios.get(`${url}/user/getuser`, { withCredentials: true })
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message
    })
  }
}

export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${url}/shop/getSeller`, { withCredentials: true, });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserInformation = (name, email, phoneNumber, password) => async (dispatch) => {
  try {
    dispatch({
      type: "updateUserInfoRequest"
    })

    const { data } = await axios.put(`${url}/user/update-user-info`, { email, password, phoneNumber, name },
      { withCredentials: true })

    dispatch({
      type: "updateUserInfoSuccess",
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: "updateUserInfoFailed",
      payload: error.response.data.message
    })
  }
}

export const updatUserAddress = (country, city, address1, address2, zipCode, addressType) => async (dispatch) => {
  try {
    dispatch({
      type: "updateUserAddressRequest"
    })

    const { data } = await axios.put(`${url}/user/update-user-address`, { country, city, address1, address2, zipCode, addressType }, { withCredentials: true })

    dispatch({
      type: "LoadSellerSuccess",
      payload: {
        successMessage: "User Address updated succesfully!",
        user: data.user
      }
    })
  } catch (error) {
    dispatch({
      type: "updateUserAddressFailed",
      payload: error.response.data.message
    })
  }
}

export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest"
    })

    const { data } = await axios.delete(`${url}/user/delete-user-address/${id}`, { withCredentials: true })

    dispatch({
      type: "deleteUserAddressRequest",
      payload: {
        successMessage: "User Address deleted succesfully!",
        user: data.user
      }
    })
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message
    })
  }
}

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${url}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
}