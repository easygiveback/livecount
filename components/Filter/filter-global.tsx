import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FilterItem } from './filter-item';
import { FilterFields } from './filter-fields';
import filter from './filter.module.scss';

export const GlobalFilter = () => {
	const [selection, setSelection] = useState([]);
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	const globalFilterStyling = classNames(filter['filter-global'], {
		[filter['filter-global--mobile']]: showMobileMenu,
	});

	const query = useRouter();
	query.asPath = `/organisation`;

	function generateFilterURL() {
		// Tutorial on filtering with formik
		// in next: https://www.youtube.com/watch?v=b7XLYkqJ5uY
		console.log('URL generation function goes here');
	}

	return (
		<>
			<div
				className={filter['mobile-filter-button']}
				onClick={() => {
					setShowMobileMenu(!showMobileMenu);
				}}>
				<p>Wem möchtest du helfen?</p>
			</div>
			<div className={globalFilterStyling}>
				<ul className={filter['filter-navigation']}>
					<li>
						<Link href='./organisationen'>
							<a>Organisationen</a>
						</Link>
					</li>
					<li>
						<Link href='./organisation-anmelden'>
							<a>Organisation anmelden</a>
						</Link>
					</li>
				</ul>
				<div className={filter['filter']}>
					<FilterItem title='Themenschwerpunkt' items={undefined} />
					<FilterItem title='Einsatzgebiet' items={undefined} />
					<FilterItem title='Standort' items={undefined} />
					<div
						className={filter['search-button']}
						onClick={() => generateFilterURL()}
					/>
				</div>
			</div>
		</>
	);
};
