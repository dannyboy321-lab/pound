
window.onload = () => {
    const user = JSON.parse(localStorage.getItem('LoggedInUser'));
    
    if (!user) {
        console.log('No user logged in.');
    } else {
        console.log('Welcome back:', user.firstName);
    }
};
