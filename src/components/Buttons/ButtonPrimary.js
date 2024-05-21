import React from 'react';

function ButtonPrimary(props) {
    return (
        <button className={'bg-black text-white border border-black font-audiowide py-4 px-16 hover:bg-transparent hover:text-black transition-all duration-500'}>
            {props.text}
        </button>
    );
}

export default ButtonPrimary;