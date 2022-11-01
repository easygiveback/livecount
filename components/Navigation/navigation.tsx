import React, { FC, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import navigation from './navigation.module.scss';

interface NavigationProps {
	isActive?: boolean;
}

export const Navigation: FC<NavigationProps> = ({ isActive }) => {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	const navigationClass = classNames(navigation.nav, {
		[navigation['nav--active']]: showMobileMenu,
	});
	return (
		<>
			<div
				className={navigation['mobile-menu-button']}
				onClick={() => setShowMobileMenu(!showMobileMenu)}>
				<div className={navigation['mobile-menu-button__meat']} />
				<div className={navigation['mobile-menu-button__meat']} />
				{/* <div className={navigation['mobile-menu-button__meat']} /> */}
			</div>
			<nav className={navigationClass}>
				<ul className={navigation['nav__list']}>
					<li className={navigation['nav__list__item']}>
						<Link href='./ueber-uns'>
							<a>
								<span className={navigation['nav__link-animation']}>
									Über uns
								</span>
							</a>
						</Link>
					</li>
					<li className={navigation['nav__list__item']}>
						<Link href='./ueber-uns'>
							<a>
								<span className={navigation['nav__link-animation']}>
									Anmelden
								</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
