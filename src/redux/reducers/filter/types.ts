
export interface ISort {
	name: string;
	sortValue: 'rating' | 'title' | 'price';
	orderBy: boolean;
}


export interface IFilterInitState {
	categoryIndex: number;
	sort: ISort;
}
