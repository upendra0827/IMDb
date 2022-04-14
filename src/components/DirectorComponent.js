import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DirectorComponent = () => {
    const directors = useSelector(state => state.allDirectors.directors)
    console.log(directors)

    const renderList = directors.map(director => {
        const { id, fullname, description, imageurl } = director
        return (
            <div className='container' key={id}>
                <Link to={`/directors/${id}`}>
                    <div className='cards'>
                        <div className='image'>
                            <img src={imageurl} alt='...' width={400} height={300}></img>
                        </div>
                        <div className='content'>
                            <h2> {fullname} </h2>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default DirectorComponent
