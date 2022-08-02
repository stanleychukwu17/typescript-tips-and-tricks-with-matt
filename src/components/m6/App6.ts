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
}[QueryElements[number]]


/**
So am going to explain the code above for you below
QueryElements[number] this is like a function in typescript, because we passed in number into the [], typescript will automatically loop through every value in it,
even if you do the same for objects, it will loop through the object key and values, but return only the values as a union, but use 'name_of_type[numbers]' mainly when your
type is an array

I stopped explaining this code since it is taking up a-lot of my time and i feel that this is an example of a simple problem that has been over engineered
*/

const obj: Union.Merge<QueryParams> = {
    a: "foo",
    b: "bow"
}
console.log(obj)