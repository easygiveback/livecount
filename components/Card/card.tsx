import React, { FC } from 'react';
import card from './card.module.scss';

interface CardProps {
	title: string;
	desc: string;
}

export const Card: FC<CardProps> = ({ title, desc }) => {
	return (
		<div className={card.card}>
			<div className={card.logo}>logo goes here</div>
			<div className={card.separator} />
			<div className={card.content}>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
};
