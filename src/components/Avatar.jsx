import React from 'react'

function Avatar({ UserId, username, online }) {

    const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200']

    const userIdBase10 = parseInt(UserId, 16)
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex];

    return (
        <div className={"w-10 h-10 relative rounded-full flex items-center justify-center "+ color}>
            <div className='text-center w-full font-bold opacity-70'>
                {username[0]}
            </div>
            {online && (
                <div className='absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white'></div>
            )}
            {!online && (
                <div className='absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white'></div>
            )}
        </div>
    )
}

export default Avatar