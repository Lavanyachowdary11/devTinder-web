import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer"
import Navbar from "./NavBar";
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios"

const Body = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
   if(userData) return
   try{
      const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
      dispatch(addUser(res.data));
    }catch (err) {
      if(err.status === 401) {
        Navigate("/login")
      }else {
        console.log(err);
      }
    }
  }

  useEffect(() => {
      fetchUser();
  }, []);

  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body