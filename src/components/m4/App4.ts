/**
this section is about how we can also do --if else statements-- with typescript
so here is the problem:
if the generic called 'TType' is an animal, let us return and object with keys and types representing an animal attributes, same goes for humans.
e.g if TType is an animal, return legs, has_tail, age
if TType is human, return bankAccount, SocialSecurityNumber, age
Assignment, since both of them has age parameters - used & to return {age:number}
*/
type Animal = {
    name: string
    soundOfAnimal: string
}

type Human = {
    firstName: string
    lastName: string
}

/**
    just take --GetRequiredInformation-- as a function and --TType-- is the argument
    if you hover over the answers of '' and '', you'll see that their return types are 'any'.. this is because 'GetRequiredInformation' returns any regardless of what TType is
*/
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
    ? { socialSecurityNumber: number }
    : never

export type RequiredInformationForAnimal_2 = GetRequiredInformation_2<Animal>

export type RequiredInformationForHuman_2 = GetRequiredInformation_2<Human>

export type RequiredInformationForAlien_2 = GetRequiredInformation_2<{
    planet: string
    shapeOfAlien: string
}>


/**
if we wanted our guy to accept Aliens
we can also do:
*/
type GetRequiredInformation_3<TType> = TType extends Animal
    ? {age:number}
    : TType extends Human
    ? {
        socialSecurityNumber: number
    } : TType extends {planet:string}
    ? TType & {
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


//* I wrote another example on this subject, enjoy my growth in TypeScript
type Creator = {
    WHO:"GOD"
}

type Animal_1 = {
    name: string
}

type Human_1 = {
    firstName: string
    lastName: string
}

// just take --GetRequiredInformation-- as a function and --TType-- is the argument
type GetRequiredInformation_7<TType> = TType extends Animal_1
    ? Creator & Animal_1 & {'HasTail':boolean, 'Legs':number}
    : Creator & Human_1 & {'color':'white'|'black', 'socialSecurity':number, 'gender':string}

export type RequiredInformationForAnimal_7 = GetRequiredInformation_7<Animal_1>

export type RequiredInformationForHuman_7 = GetRequiredInformation_7<Human_1>

const cat:RequiredInformationForAnimal_7 = {'WHO':'GOD', name:'molly', Legs:4, HasTail:true};
const student:RequiredInformationForHuman_7 = {'WHO':'GOD', firstName:'stanley', lastName:'chukwu', color:'black', gender:'male', socialSecurity:40828048040};
console.log(cat, student);
