import React from "react"

// ElementType stands for all types of Element (ie h1, p, div, img e.t.c)
type textOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

// instead of using the one below(i.e textProps), using the next one 'textProps2'
// type textProps<T extends React.ElementType> = textOwnProps<T> & React.ComponentProps<T>

// to avoid name collision from our textOwnProps and React.ComponentProps, we will use the Omit to omit the names already specified in TextOwnProps, at-least we know that if any other ones does not collide, the 'children' names will collide
type textProps2<T extends React.ElementType> = textOwnProps<T> &
    Omit<React.ComponentProps<T>, keyof textOwnProps<T>>

export default function TextComp<Z extends React.ElementType = 'div'>({children, as}: textProps2<Z>) {
    const Component = as || 'div'

    return (
        <Component>{children}</Component>

    )
}
