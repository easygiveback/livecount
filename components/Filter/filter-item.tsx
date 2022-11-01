import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FilterFields } from './filter-fields';
import filter from './filter.module.scss';

interface FilterItemProps {
	title: string;
	items: any;
}

export const FilterItem: FC<FilterItemProps> = ({ title, items }) => {
	const [activeItems, setActiveItems] = useState(['Was ist dein Thema?']);
	const [showFields, setShowFields] = useState<boolean>(false);
	const [activeField, setActiveField] = useState<string>('');

	const filterClass = classNames(filter.filter, {
		[filter['filter--active']]: showFields,
	});

	const filterItemClass = classNames(filter['filter-item'], {
		[filter['filter-item--active']]: showFields,
	});

	return (
		<>
			<div
				className={filterItemClass}
				onClick={() => {
					setShowFields(!showFields);
					setActiveField(title);
				}}>
				<div className={filter['filter-item__title']}>{title}</div>
				<div className={filter['filter-item__active-items']}>{activeItems}</div>
			</div>
			{showFields && <FilterFields fieldTitle={activeField} />}
		</>
	);
};
