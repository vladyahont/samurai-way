import {UserType} from "redux/users-reducer";

export const updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: any, newObjProps: any) => {
   return  items.map(u => {
        // @ts-ignore
       if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}