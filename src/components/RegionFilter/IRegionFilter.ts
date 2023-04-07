export interface IRegionFilter {
	onFilter: (e: { label: string; value: string }) => void;
}
