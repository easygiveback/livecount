import React, { FC, useState } from 'react';
import { fieldData } from './fielddata';
import filter from './filter.module.scss';

interface FilterItemProps {
	fieldTitle: string;
}

export const FilterFields: FC<FilterItemProps> = ({ fieldTitle }) => {
	const fields = fieldData.fields.filter(
		(field) => field.title === fieldTitle.toLowerCase()
	)[0];

	return (
		<div className={filter['filter-fields']}>
			<div className={filter['filter-fields__title']}>{fieldTitle}</div>
			<div className={filter['filter-fields__fields']}>
				<ul>
					{fields.fields.map((field, key) => {
						return <li key={key}>{field.title}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
