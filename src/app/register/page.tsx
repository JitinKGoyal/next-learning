"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Register() {
    interface User {
        username: string,
        password: string,
        email: string
    }

    const [user, setUser] = useState<User>({
        username: '',
        password: '',
        email: ''
    })

    const handleRegister = () => {

    }

    return (
        <div>

            <div className='flex flex-col min-h-screen justify-center items-center'>
                <h1 >Register</h1>
                <div className='flex flex-col items-center justify-center'>

                    <div className='flex flex-col m-3'>
                        <label htmlFor='username'>username</label>
                        <input
                            className='py-2 px-4 rounded-lg'
                            type='text'
                            id='username'
                            value={user?.username}
                            onChange={e => setUser({ ...user, username: e.target.value })}
                            placeholder='username'
                        />
                    </div>

                    <div className='flex flex-col m-3'>
                        <label htmlFor='email'>email</label>
                        <input
                            className='py-2 px-4 rounded-lg'
                            type='text'
                            id='email'
                            value={user?.email}
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            placeholder='email'
                        />
                    </div>
                    <div className='flex flex-col m-3'>
                        <label htmlFor='password'>password</label>
                        <input
                            className='py-2 px-4 rounded-lg'
                            type='text'
                            id='password'
                            value={user?.password}
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            placeholder='password'
                        />
                    </div>
                    <div className='flex flex-col m-3'>
                        <button
                            className="bg-transparent  hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded"
                            onClick={handleRegister}
                        >

                            Start with us
                        </button>
                    </div>
                </div>

                <div className='hover:underline'>
                    <Link href='/login'> Already have an account? </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
