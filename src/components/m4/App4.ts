/**
this section is about how we can also do if else with typescript
*/
type Animal = {
    name: string
}

type Human = {
    firstName: string
    lastName: string
}

// just take --GetRequiredInformation-- as a function and --TType-- is the argument
type GetRequiredInformation<TType> = any

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>

export type RequiredInformationForHuman = GetRequiredInformation<Human>


/**
first solution:
so let's say for a human, we wanted to get their social security number
and for an animal, we wanted to get their age
so we can check to see if --TType-- is an extension of Animal or if it is an extension of Human
hover over the two answers below to see the result(i.e RequiredInformationForAnimal_1, RequiredInformationForHuman_1)
*/
type GetRequiredInformation_1<TType> = TType extends Animal ? {age:number} : {socialSecurityNumber: number}

export type RequiredInformationForAnimal_1 = GetRequiredInformation_1<Animal>

export type RequiredInformationForHuman_1 = GetRequiredInformation_1<Human>


/**
we can also do:
if extends animals, return age. else if it extends Human, return socialSecurityNumber. Then return never.
--never-- is a type in typescript that says this type can never be used
--RequiredInformationForAlien_2-- if you hover over this answer, you'll see that the type is never
*/
type GetRequiredInformation_2<TType> = TType extends Animal
    ? {age:number}
    : TType extends Human
    ? {
        socialSecurityNumber: number
    }
    : never

export type RequiredInformationForAnimal_2 = GetRequiredInformation_2<Animal>

export type RequiredInformationForHuman_2 = GetRequiredInformation_2<Human>

export type RequiredInformationForAlien_2 = GetRequiredInformation_2<{
    planet: string
    shapeOfAlien: string
}>


/**
we can also do:
if we wanted our guy to accept Aliens
*/
type GetRequiredInformation_3<TType> = TType extends Animal
    ? {age:number}
    : TType extends Human
    ? {
        socialSecurityNumber: number
    } : TType extends {planet:string}
    ? {
        LordOfThisPlanet: 'Jehovah',
        whatDoYouWant: string,
        HowLongAreYouStaying: string
    }
    : never


// if you hover over the answer below, you'll see that all is still well because, the argument received still contains {planet: string}
export type RequiredInformationForAlien_3 = GetRequiredInformation_3<{
    planet: string
    shapeOfAlien: string
}>