import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { FirebaseAuth } from "./config";
import { signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult( result );

        const user = result.user;
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage,
        }

    }
};