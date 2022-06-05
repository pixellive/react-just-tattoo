import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChange }  = props;
    return (
        <div className="app-search">
                <input 
                    className="app-search-input" 
                    type="text"
                    placeholder="สักหน่อยมั้ยหล่ะ"
                    value={value}
                    onChange={(event)=> {onValueChange(event.target.value)}}
                />
        </div>
    )
}

export default AppSearch;