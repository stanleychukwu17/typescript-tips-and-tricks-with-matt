/**
Summary: shows us how to work with typescript when fetch and when working with API'S
On this section - when we fetch data from api, how do we control types of data returned.. in so many cases, we have an idea of what the
data we're expecting from an API would look like. 
we can install a package called zod as i have done for this lecture
*/

import {z} from 'zod'

const Data = z.object({
    id: z.string(),
    name: z.string()
})

export type DataType = z.infer<typeof Data>

fetch('/someApi')
    .then(res => res.json())
    .then(res => {
        /**
            if you hover over the --data-- result, you will see that is now has the proper types, i.e --const data: {id: string; name: string; }--
        */
        const data = Data.parse(res)
        console.log(data, data.id, data.name)        
    })


// we can also do the above like :

interface DataFromApi {
    id: string;
    name: string;
}
fetch('/someApi')
    .then(res => res.json())
    .then((res: DataFromApi )=> {
        const data = res
        console.log(data, data.id, data.name)        
    })