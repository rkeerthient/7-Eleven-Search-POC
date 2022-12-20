export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface Product {
	name: string,
	c_catalogTypes?: string[],
	c_categories?: string[],
	c_handling?: string[],
	c_longDescription?: string,
	c_sizes?: string[],
	c_subcategories?: string[],
	c_thumbnail?: Image,
	c_types?: string[],
	id: string,
}
