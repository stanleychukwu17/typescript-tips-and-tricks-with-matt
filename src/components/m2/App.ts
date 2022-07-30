/**
So the problem here is that 
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


/**
So now, what if we wanted to pass in any type of object with having values of any types, we can use generics to solve this problem
solution 1
*/
export const getDeepValue_1 = <TObj>(obj:TObj, firstKey:string, secondKey:string) => {
    return obj[firstKey][secondKey]
}

/**
So now, typescript is complaining that it cannot access an unknown object since it doesn't know what type of value of what ever we have passed in,
first it doesn't know we even passed in an object... so take a look at the near final solution
solution 2
*/