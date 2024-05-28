import React from 'react';
import Image from 'next/image';
import squares from '../../assets/squares/squares.svg';

const SquareImage = ({ className }) => {
    return <Image priority={false} src={squares} alt={'Squares svg'} width={87} height={87} className={className} />;
};

export default SquareImage;
