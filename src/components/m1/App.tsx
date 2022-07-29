/**
this example is all about using of generics
in the TableProps, items is an object that is limited to {id:string; firstName: string}, but we can use generics to make items an array of multi-dimensional object
where items can any type of objects within it's array ... see solution
*/
interface TableProps {
    items: {id:string; firstName: string}[];
    renderItems: (item: {
        id: string;
        firstName: string;
    }) => React.ReactNode
}

export const Table = (props: TableProps) => {
    return <>Hi</>
}

export const Component = () => {
    return (
        <Table
            items={[{id:'1', firstName:'stanley'}]}
            renderItems={(item) => {
                return null
            }}
        ></Table>
    )
}


//** Solution
interface TableProps2<anyItem> {
    items: anyItem[];
    renderItems: (item: anyItem) => React.ReactNode
}

// without the ,(comma) after the anyItem, typeScript would trow an error, also you can call anyItem any names you want e.g you can change the name to box and there would be no errors
export const Table2 = <anyItem,>(props: TableProps2<anyItem>) => {
    return <>Hi</>
}

// so now, if you hover over the each of dts argument passed into the renderItems functions, you'll see that dts has all the values of whatever the items object received
export const Component2 = () => {
    return (
        <>
            <Table2
                items={[{id:'1', firstName:'stanley'}]}
                renderItems={(dts) => {return null}}
            ></Table2>
        </>
    )
}