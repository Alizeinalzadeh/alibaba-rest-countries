export interface ICountries {
	name: Name;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: string;
	unMember: boolean;
	currencies: Currencies;
	idd: Idd;
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: Languages;
	translations: Translations;
	latlng: number[];
	landlocked: boolean;
	area: number;
	demonyms: Demonyms;
	flag: string;
	maps: Maps;
	population: number;
	fifa: string;
	car: Car;
	timezones: string[];
	continents: string[];
	flags: Flags;
	coatOfArms: CoatOfArms;
	startOfWeek: string;
	capitalInfo: CapitalInfo;
	postalCode: PostalCode;
	borders: string[];
}

interface PostalCode {
	format: string;
	regex: string;
}

interface CapitalInfo {
	latlng: number[];
}

interface CoatOfArms {
	png: string;
	svg: string;
}

interface Flags {
	png: string;
	svg: string;
	alt: string;
}

interface Car {
	signs: string[];
	side: string;
}

interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

interface Demonyms {
	[key: string]: { [key: string]: string };
}

interface Translations {
	[key: string]: { official: string; common: string };
}

interface Languages {
	[key: string]: string;
}

interface Idd {
	root: string;
	suffixes: string[];
}

interface Currencies {
	[key: string]: {
		name: string;
		symbol: string;
	};
}

interface Name {
	common: string;
	official: string;
	nativeName: NativeName;
}

interface NativeName {
	[key: string]: {
		official: string;
		common: string;
	};
}
