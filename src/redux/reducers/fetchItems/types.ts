
export interface IPizza {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
	rating: number;
	description: string;
	totalPrice: number;
}

export interface IFetchPizza {
	categoryFilter: string;
	sortType: string;
	sortOrder: boolean | undefined;
	searchValue: string;
}
