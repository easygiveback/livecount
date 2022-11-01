import React, { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import { GlobalFilter } from '../Filter/filter-global';
// import classNames from 'classnames';
import header from './header.module.scss';

export const Header = () => {
	return (
		<>
			<header data-header className={header.header}>
				<Link href='./'>
					<a>Logo</a>
				</Link>
			</header>
		</>
	);
};
