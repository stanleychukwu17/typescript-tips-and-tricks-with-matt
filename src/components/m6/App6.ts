/**
So the below topic is pretty advanced! using typescript to destructure the params from a request and turning the params into an object of keys and values,
I had to install the ts-toolbelt for this lecture.. the ts-toolbelt is a library for typescript, it is just like lodash, it comes with so many functions
that you can use on typescript types
*/
import {String, Union} from 'ts-toolbelt'

export const query = `/home?a=foo&b=bow`

type Query = typeof query

type SecondQueryPart = String.Split<Query, "?">[1] // ["/home", "a=foo&b=bow"], so doing [1] gives us "a=foo&b=bow"

type QueryElements = String.Split<SecondQueryPart, "&"> // split-"a=foo&b=bow" now gives us ["a=foo", "b=bow"]

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [Key in String.Split<QueryElement, "=">[0]]:
            String.Split<QueryElement, "=">[1]
    }
}[QueryElements[number]] // try deleting this line '[QueryElements[number]]' and see what the result will look like (i.e QueryParams) - [QueryElements[number]]


/**
So am going to explain the code above for you below
QueryElements[number] this is like a function in typescript, because we passed in number into the [], typescript will automatically loop through every value in it,
even if you do the same for objects, it will loop through the object key and values, but return only the values as a union, but use 'name_of_type[numbers]' mainly when your
type is an array

i was revising the code and decided to explain every line of the type QueryParams
type QueryParams = {
    [QueryElement in QueryElements[number]]: { // for each loop of 'QueryElements[number]', 'QueryElement' will be = "a=foo", "b=bow"
        // so final result of the loop will be {"a=foo":{a:foo}, "b=bow":{b:bow}}
        [Key in String.Split<QueryElement, "=">[0]]:
            String.Split<QueryElement, "=">[1]
    }
}[QueryElements[number]] // try deleting this line '[QueryElements[number]]' and see what the result will look like (i.e QueryParams)

so this last line of '[QueryElements[number]]' is us looping through the final object to create a union from the values of each key
the final type result without the last line of '[QueryElements[number]]' would like this:
    type QueryParams = {
        "a=foo": {
            a: "foo";
        };
        "b=bow": {
            b: "bow";
        };
    }
But with the with last line of '[QueryElements[number]]' which will loop through the object based on the keys
    type QueryParams = {
        a: "foo";
    } | {
        b: "bow";
    }
*/


const obj: Union.Merge<QueryParams> = {
    a: "foo",
    b: "bow"
}

// trying the line below, i see no need to do Union.Merge above like the teacher did
const obj_2:QueryParams = {a:'foo', b:'bow'};

console.log(obj, obj_2)