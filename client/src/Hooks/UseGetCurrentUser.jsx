import axios from "axios";
import { serverUrl } from "../App";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {setUserData} from "../Redux/userSlice"

const UseGetCurrentUser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getcurrentuser = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/user/me`, {
          withCredentials: true,
        });
        console.log("Current User Data:", response.data);

        dispatch(setUserData(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getcurrentuser();
  }, []);
};

export default UseGetCurrentUser;
