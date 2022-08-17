import './App.css';
import {Users} from "./users"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Table} from "./Table"
 

function App() {
	const [query, setQuery] = useState("");

	const keys = ["first_name", "last_name", "email"]

	const search = (data) => {
		return data.filter(item=>
			keys.some(key=>item[key].toLowerCase().includes(query))
		)
	}


	return (
		<div className="m-5 app d-flex flex-column justify-content-center align-items-center">
			<input 
				type="text" 
				className='search mb-4' 
				placeholder='Search...' 
				onChange={e=>setQuery(e.target.value)}
			/>

			<Table data={search(Users)}/>

		</div>
	);
}

export default App;
