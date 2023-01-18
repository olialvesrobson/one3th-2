// authActions.js
import { firestore } from '../../config/firestore/store';

export const signUp = (newUser) => {
    return async (dispatch) => {
        try {
        const response = await firestore.createUser(newUser);
        console.log(response);
        } catch (error) {
            console.log(error);
        } 
    }
}
