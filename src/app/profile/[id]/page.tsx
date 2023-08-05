import React from 'react'

function profileId({ params }: any) {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div>
                profileId
                <span className='p-2 rounded bg-white text-black mx-2'>
                    {params.id}
                </span>
            </div>
        </div>
    )
}

export default profileId
