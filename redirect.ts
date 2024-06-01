import { getAuth, onAuthStateChanged } from "firebase/auth";

const redirectToPage = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, redirect them
            window.location.href = 'homepage.html'; // Change 'homepage.html' to your desired page
        } else {
            // User is signed out
            console.log('User is not logged in.');
        }
    });
};

export { redirectToPage };
