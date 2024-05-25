import React from 'react';
import Image from 'next/image';
import squares from '../../assets/squares.svg';

const SquareImage = ({ className }) => {
    return <Image src={squares} alt={'Squares svg'} width={87} height={87} className={className} />;
};

export default SquareImage;