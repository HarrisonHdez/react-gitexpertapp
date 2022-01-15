// Sniper rafcp Create un __Functional Component__ con propTypes
// sniper rafc sin propTypes
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']); 

    // const handleApp = () => {
    //     // Solucion 1
    //     // setCategories( [...categories, 'HunterXHunter'] ); 
    //     // setCategories( ['HunterXHunter', ...categories] ); 
    //     // Solucion 2
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        <div>
            <h2 className="card-nombre">GitExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>


           <ol>
              {

                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
                  
              }
           </ol>
        </div>
    )
}


// export default GitExpertApp

