// eslint-disable-next-line @typescript-eslint/ban-types
type Compute<T> = T extends Function ? T : { [P in keyof T]: T[P] }

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export type MergeProp<T extends any, U extends any> = Compute<
    T & Omit<U, keyof T>
>
