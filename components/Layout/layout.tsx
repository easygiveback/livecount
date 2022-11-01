import React, { FC } from 'react';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import layout from './layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={layout.main}>{children}</main>
			<Footer />
		</>
	);
};
