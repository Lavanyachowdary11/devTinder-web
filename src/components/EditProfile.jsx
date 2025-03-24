import { useState } from 'react'
import UserCard from "./UserCard"
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from "axios";
import Notification from './Notification';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("")
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", { firstName, lastName, age, gender, about, photoUrl }, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } catch (err) {
            setError(err.response.data);
        }
    }
    return (
        <>
            <div className='flex justify-center my-10'>
                <div className='flex justify-center mx-10'>
                    <div className="card bg-base-300 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Edit Profile</h2>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo URL</legend>
                                <input type="text" className="input" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Age</legend>
                                <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Gender</legend>
                                <select defaultValue={gender} className="select" onChange={(e) => setGender(e.target.value)}>
                                    <option>female</option>
                                    <option>male</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">About</legend>
                                <textarea className="textarea" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                            </fieldset>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center my-2">
                                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
            </div>
            {showToast && <Notification msg="Profile saved succesfully" />}
        </>

    )
}

export default EditProfile