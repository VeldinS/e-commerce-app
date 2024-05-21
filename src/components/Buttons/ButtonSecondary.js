import React from 'react';

function ButtonSecondary(props) {
    return (
        <button className={'bg-transparent text-black border border-black font-audiowide py-2 px-8 hover:bg-black hover:text-white hover:border-black transition-all duration-500'}>
            {props.text}
        </button>
    );
}

export default ButtonSecondary;