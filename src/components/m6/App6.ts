import {String, Union} from 'ts-toolbelt'

export const query = `/home?a=foo&b=bow`

type Query = typeof query

type SecondQueryPart = String.Split<Query, "?">[1]

type QueryElements = String.Split<SecondQueryPart, "&">

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [Key in String.Split<QueryElement, "=">[0]]:
            String.Split<QueryElement, "=">[1]
    }
}[QueryElements[number]]

const obj: Union.Merge<QueryParams> = {
    a: "foo",
    b: "wow"
}
console.log(obj)