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
	eng: Eng2;
	fra: Eng2;
}

interface Eng2 {
	f: string;
	m: string;
}

interface Translations {
	ara: Eng;
	bre: Eng;
	ces: Eng;
	cym: Eng;
	deu: Eng;
	est: Eng;
	fin: Eng;
	fra: Eng;
	hrv: Eng;
	hun: Eng;
	ita: Eng;
	jpn: Eng;
	kor: Eng;
	nld: Eng;
	per: Eng;
	pol: Eng;
	por: Eng;
	rus: Eng;
	slk: Eng;
	spa: Eng;
	srp: Eng;
	swe: Eng;
	tur: Eng;
	urd: Eng;
	zho: Eng;
}

interface Languages {
	eng: string;
}

interface Idd {
	root: string;
	suffixes: string[];
}

interface Currencies {
	BBD: BBD;
}

interface BBD {
	name: string;
	symbol: string;
}

interface Name {
	common: string;
	official: string;
	nativeName: NativeName;
}

interface NativeName {
	eng: Eng;
}

interface Eng {
	official: string;
	common: string;
}
