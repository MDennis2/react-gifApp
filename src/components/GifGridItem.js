// import React from 'react'

// export const GifGridItem = ( props ) => {

//     console.log(props);

//     return (
//         <div>
//             <img src ={props.url} alt= {props.title} />
//             <p>{props.title}</p>
//         </div>
//     )
// }
import React from 'react'


export const GifGridItem = ( {title, url} ) => {


    return (
        <div className="card animate__animated animate__bounceInLeft">
            <img src ={url} alt= {title} />
            <p>{title}</p>
        </div>
    )
}
