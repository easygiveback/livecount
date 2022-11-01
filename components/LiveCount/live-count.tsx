import React, { FC, useState, useEffect, useRef } from 'react';
import { random } from 'lodash';
import { donations } from './data';
import livecount from './livecount.module.scss';

interface Donator {
	donator: string;
	amount: number;
}

export const LiveCount: FC = () => {
	const [number, setNumber] = useState(0);
	const [donator, setDonator] = useState<Donator>();

	function calculateSum(addition: number) {
		return number + addition;
	}

	useInterval(() => {
		const randomDonator = donations[random(1, donations.length - 1)];
		setDonator(randomDonator);
		setNumber(number + randomDonator.amount);
	}, 5000);

	function useInterval(callback: any, delay: number) {
		const savedCallback = useRef();

		// Remember the latest callback.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			let id = setInterval(() => {
				// @ts-ignore
				savedCallback.current();
			}, delay);
			return () => clearInterval(id);
		}, [delay]);
	}

	return (
		<div className={livecount.livecount}>
			<div className={livecount.sum}>{number + '€'}</div>
			<div className={livecount.donator}>
				{donator &&
					'+ ' + donator?.donator + ' spendet ' + donator?.amount + '€'}
			</div>
		</div>
	);
};
