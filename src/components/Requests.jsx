import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Requests = () => {
    const requests = useSelector((store) => store.requests)
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            const res = axios.post(BASE_URL + "/request/review/" + status + "/" + _id , {}, {withCredentials: true});
            dispatch(removeRequest(_id));
        }catch(err) {

        }
    }
    const fecthRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", { withCredentials: true })
            dispatch(addRequests(res?.data?.data))
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fecthRequests();
    }, [])

    if (!requests) return

    if (requests.length === 0) return <h1 className="text-bold text-3xl flex justify-center my-10">No Resquests Found</h1>

    return (
        <div className="text-center my-10">
            <h1 className="text-bold text-3xl text-white">Requests</h1>

            {requests.map((request) => {
                const { firstName, lastName, photoUrl, age, gender, about, _id } = request.fromUserId
                return (
                    <div key={_id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-200 w-2/3 mx-auto">
                        <div>
                            <img className="w-20 h-20 rounded-full w-full" alt="photo" src={photoUrl} />
                        </div>
                        <div className="text-left mx-4">
                            <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                            {(age && gender) && <p>{age + ", " + gender}</p>}
                            <p>{about}</p>
                        </div>
                        <div className="flex">
                            <button className="btn btn-primary mx-2" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                            <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Requests