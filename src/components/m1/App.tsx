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
    }) => any
}

export const Table = (props: TableProps) => {
    return ''
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

interface TableProps2<Titem> {
    items: {id:string; firstName: string}[];
    renderItems: (item: {
        id: string;
        firstName: string;
    }) => any
}
