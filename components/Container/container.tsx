import React, { FC } from 'react';
import container from './container.module.scss';

interface ContainerProps {
	children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
	return <div className={container.container}>{children}</div>;
};
