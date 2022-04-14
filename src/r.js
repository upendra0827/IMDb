import { useEffect } from "react"

useEffect(() => {

    fetch('https://react-redux-imdb.herokuapp.com/directors', {
        method: 'GET'
    })
        .then(res => console.log(res))
        .catch(err => {
            console.log('hi')
            console.log(err)
        })

}, [])