import React from 'react';
import Link from 'next/link';
import navigation from './navigation.module.scss';

export const Logo = () => {
	return (
		<Link href='../'>
			<a>
				<div className={navigation.logo}>
					<div style={{ textAlign: 'center', color: '#786543' }}>
						easygiveback
					</div>
				</div>
			</a>
		</Link>
	);
};
