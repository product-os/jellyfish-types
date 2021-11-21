export interface PostResults {
	data:
		| string
		| {
				originator?: string;
				[key: string]: any;
		  };
	error: boolean;
}

export interface PostOptions {
	id: string;
	actor: string;
	action: string;
	timestamp: string;
	card: string;
	originator?: string;
}
