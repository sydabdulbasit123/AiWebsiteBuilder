import axios from "axios";
import { serverUrl } from "../App";
import { useEffect } from "react";

const UseGetCurrentUser = () => {
  useEffect(() => {
    const getcurrentuser = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/user/me`, {
          withCredentials: true,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getcurrentuser();
  }, []);
};

export default UseGetCurrentUser;
