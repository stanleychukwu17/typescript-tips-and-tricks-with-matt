/**
So the problem here is that we have this function below, we want the function to be able to access deeper into any objects passed to
it as an argument, but the thing is that we want the object key and values to be dynamic, we do not want fixed object keys and values.
so here is the problem below:
*/
export const getDeepValue = (obj:any, firstKey:string, secondKey:string) => {
    return obj[firstKey][secondKey]
}

const obj = {
    foo: {
        a: true, b:2
    },
    bar: {
        c: "12", d:18
    }
}

const value = getDeepValue(obj, "foo", "b")
console.log(value)

/**
solution 1: So generics to the rescue of this problem, un-comment the return lines to see errors
*/
export const getDeepValue_1 = <TObj>(obj:TObj, firstKey:string, secondKey:string) => {
    // return obj[firstKey][secondKey]
}

/**
So now, typescript is complaining that it cannot access an unknown object since it doesn't know what type of the values of whatever we have passed in,
first, it doesn't know we even passed in an object... so take a look at the near final solution
solution 2: un-comment the return lines to see errors
*/
export const getDeepValue_2 = <TObj>(
    obj:TObj,
    firstKey:keyof TObj,
    secondKey:string
) => {
    // return obj[firstKey][secondKey]
}

// next: un-comment the return lines to see errors
export const getDeepValue_3 = <TObj, TFirstKey extends keyof TObj>(
    obj:TObj,
    firstKey:TFirstKey,
    secondKey:string
) => {
    // return obj[firstKey][secondKey]
}

// finally:
export const getDeepValue_4 = <TObj, TFirstKey extends keyof TObj, TSecondKey extends keyof TObj[TFirstKey]>(
    obj:TObj,
    firstKey:TFirstKey,
    secondKey:TSecondKey
) => {
    return obj[firstKey][secondKey]
}

/**
--keyof-- can be used to extract the keys of any object, 
so hopefully you understand what we've done here.. otherWise head over to the youtube video and watch the full video to see the teacher explain
so this is all about using some extensions provided by typescript to solve some common problems.. in this case, how do we access an object
when we are not sure of what the keys and values of this object would be.. generics to the rescue..
Please note that --keyof-- is almost like a .map() function, but instead of returning an array, it loops through an object and returns the keys as a union.
You can also do --TObj extends object-- just to be sure that TObj is always an object

Explanation of 'TSecondKey extends keyof TObj[TFirstKey]':
you know that 'TFirstKey' is a union of 'TObj', so doing 'keyof TObj[TFirstKey]' will automatically loop through the values of each object inside the 'TFirstKey'
*/



// another small example of using of keyOff
interface Letters {
    a: string;
    b: string;
    c: string;
}

export type LettersAsUnion = keyof Letters;

// the below can only be either 'a', 'b', or 'c'
// LettersAsUnion could also be = 'a' | 'b' | 'c'
export const letter: LettersAsUnion = 'a'
export const letter_1: LettersAsUnion = 'b'

// but letter2 cannot be 'a', 'b', or 'c', because it is not a keyof Letters, uncomment to see error
// export const letter2: LettersAsUnion = 'ab'
export const letter3: Letters = {'a':'me', 'b':'me', 'c':'me'}