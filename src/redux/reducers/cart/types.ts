export interface ICartItem {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	type: string;
	size: string;
	count: number;
	totalPrice: number;
};

export interface ICartInitState {
	cartPriceTotal: number;
	items: ICartItem[];
	totalCount: number;
};
