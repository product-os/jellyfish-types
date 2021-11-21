export interface CacheResultNoHit {
	hit: false;
}

export interface CacheResultHit<TElement = object> {
	hit: true;
	element: TElement;
}

export type CacheResult<TElement> = CacheResultNoHit | CacheResultHit<TElement>;

export interface Cache {
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
	set: <TElement>(table: string, element: TElement) => Promise<void>;
	unset: <TElement>(element: TElement) => Promise<void>;
	reset: () => Promise<void>;
	getById: <TElement>(
		table: string,
		id: string,
	) => Promise<CacheResult<TElement>>;
	getBySlug: <TElement>(
		table: string,
		slug: string,
	) => Promise<CacheResult<TElement>>;
	setMissingId: (table: string, id: string) => Promise<void>;
	setMissingSlug: (table: string, slug: string) => Promise<void>;
}
