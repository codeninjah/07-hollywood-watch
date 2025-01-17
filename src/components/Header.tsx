
interface Props {
	searchText: string;
	setSearchText: (search: string) => void;
}

const Header = ({ searchText, setSearchText }: Props) => (
	<header>
		<h1> Hollywood watch </h1>
		<input type="text" value={searchText}
			onChange={event => setSearchText(event.target.value)} />
		<span className="magnify-search">🔍</span>
	</header>
)

export default Header
