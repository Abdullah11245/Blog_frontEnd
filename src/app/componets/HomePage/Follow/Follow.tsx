'use client'

import { useEffect, useState } from "react"
import axios from "axios"

export const Follow = () => {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setUserId(parsedUser._id)
    }
  }, [])

  // Fetch users
  useEffect(() => {
    if (!userId) return

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/users')
        const allUsers = response.data

        const filteredUsers = allUsers.filter((u: any) => u._id !== userId)
        setUsers(filteredUsers)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [userId])

  const follow = async (userId: string, followersId: string) => {
    try {
      const response = await axios.post('http://localhost:5000/follow/followings', {
        userId,
        followersId
      }, {
        withCredentials: true,
      })
      console.log(response.data)
    } catch (error) {
      console.error('Error following user:', error)
    }
  }

  return (
    <div className='flex flex-col justify-center'>
      <h1 className="mt-3 text-lg font-semibold py-2">
        Follow Members
      </h1>

      {user && users
        .filter((u: any) => !user.following.includes(u._id))
        .map((u: any) => (
          <div key={u._id} className='w-full mx-auto flex flex-col'>
            <div className="user-row flex flex-col items-center justify-between cursor-pointer duration-300 sm:flex-row pb-4">
              <div className="user flex items-center flex-row text-left gap-x-2">
                <img
                  className="avatar w-10 h-10 rounded-full"
                  src={u.userImage || "https://via.placeholder.com/40"}
                  alt={u.name}
                />
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                  <span className="title font-medium text-sm">{u.name}</span>
                  <div className="skills flex flex-col text-xs ">
                    <span className="subtitle text-slate-800">{u.preference}</span>
                    <span className="subtitle text-slate-600">
                      Followers: <span className="text-slate-800 text-xs">{u.followers?.length || 0}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button
                  onClick={() => follow(userId as any, u._id)}
                  className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-gray-700 duration-300"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}

      <a className="block text-sm mt-3 rounded text-gray-600 duration-300" href="#/">
        Show more members
      </a>
    </div>
  )
}
