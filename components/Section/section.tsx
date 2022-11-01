import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import section from './section.module.scss';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
	hasTop?: boolean;
	hasBottom?: boolean;
	children?: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ hasTop, hasBottom, children }) => {
	const [loaded, setLoaded] = useState(false);
	const sectionClass = classNames(section.section, {
		[section['section--t']]: hasTop,
		[section['section--nb']]: !hasBottom,
		[section['section--loaded']]: loaded,
	});
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	useEffect(() => {
		if (inView) {
			setLoaded(true);
		}
	}, [inView]);

	return (
		<div className={sectionClass} ref={ref}>
			{children}
		</div>
	);
};
