import React, {useState} from 'react';
import pg from './paginator.module.css';


function Paginator(props, portionSize = 5) {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pageMas = []
	for (var i = 1; i <= pagesCount; i++) {
		pageMas.push(i) 
	}


	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPageNumber = portionNumber * portionSize

    return (
		<div className={pg.pageUrl}>
			{portionNumber > 1 ? <button value="back" onClick={setPortionNumber(portionNumber - 1)}></button> : null}

			{pageMas
				//.filter(p => p >= leftPageNumber && p <= rightPageNumber) || .slice(leftPageNumber, rightPageNumber)   оба варианта не работают почему-то
				.map( (p) => {
				return(
					<span 
						onClick={ () => { props.onPageChanged(p) } }
						className={props.currentPage === p && pg.active}>{p}</span>
				)
			})}


			{portionNumber < portionCount ? <button value="next" onClick={setPortionNumber(portionNumber + 1)}></button> : null}
		</div>
    )
}

export default Paginator