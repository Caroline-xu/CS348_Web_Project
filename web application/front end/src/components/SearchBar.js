import React, {useState} from 'react';

/*export default function SearchBar() {
    const [searchinput, setSearchinput] = useState("")
    const [err, setErr] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        // await????
    }

    return (
        <div>
            <div className='search_input'>
                <label>Search here</label>
                <input onChange={(e) => {
                    setSearchinput(e.target.value)
                }} />
            </div>
            <button className='search_submit' onClick={handleSubmit}>Search</button>
        </div>
    )
}*/

class SearchBar extends React.Component {
    state = {term: ''}

    handleSubmit = e => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
        console.log(this.state)
    }

    render () {
        return (
            <div className='ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label>Brand Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;