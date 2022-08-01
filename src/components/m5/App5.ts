/**
so now the function below is meant to compare two values and tells you if those two values are the same, but we all know that
with arrays, even if they are the same thing, it will never return true, so we do not want the function to compare arrays
*/
export const deepEqualCompare = <Arg>(
    a: Arg,
    b: Arg
): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new Error("You cannot compare two arrays using deepEqualCompare")
    }
    return a === b;
}

/**
solution 1
we can use if else in typescript to make sure that the arguments are not arrays
*/
export const deepEqualCompare_1 = <Arg>(
    a: Arg extends any[] ? `Don't pass an array!` : Arg, // i would love to do: 'a: Arg extends any[] ? never : Arg'
    b: Arg
): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new Error("You cannot compare two arrays using deepEqualCompare")
    }
    return a === b;
}

// see different use cases, un-comment to see errors
const c1 = deepEqualCompare_1('a', 'b')
const c2 = deepEqualCompare_1<string>('a', 'b')
console.log(c1, c2)
// const c3 = deepEqualCompare_1<number>('a', 'b') // this will give you an error, because you've set the generic to a number but you're passing in string as an argument
// const c4 = deepEqualCompare_1<[]>('a', 'b')
// const c5 = deepEqualCompare_1([], [])