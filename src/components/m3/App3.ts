/**
Summary: shows us how to work with typescript when fetching data from an API and we want to make sure that the data returned from the API is well typed
In so many cases, we have an idea of what the data we're expecting from an API would look like. so let's use zod to solve this issue
we can install a package called zod as i have done for this lecture
*/

import {z} from 'zod'

// the data structure we're expecting from the API
const Data = z.object({
    id: z.string(),
    name: z.string()
})

// export the data type, just in case we wanted to use it in other projects, also <typeof > is a method in typescript that returns the type of an object, component, function e.t.c
export type DataType = z.infer<typeof Data>

fetch('/someApi')
    .then(res => res.json())
    .then(res => {
        /**
            if you hover over the --data-- result, you will see that it now has the proper types, i.e --const data: {id: string; name: string; }--
        */
        const data = Data.parse(res)
        console.log(data, data.id, data.name)        
    })


// we can also do the above like:
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

// For me the above is much simpler and cleaner abd uses no external packages