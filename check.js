document.getElementById('checkoutForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('LoggedInUser'));
    const invoices = getFromLocalStorage('AllInvoices');

    if (!user || !user.cart || user.cart.length === 0) {
        alert('Your cart is empty! Please add items before proceeding.');
        return;
    }

    const invoice = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        payment: document.getElementById('payment').value,
        cart: user.cart,
        invoiceNumber: `INV-${Date.now()}`,
        date: new Date().toISOString(),
    };

    invoices.push(invoice);
    user.invoices.push(invoice);
    user.cart = []; 

    saveToLocalStorage('AllInvoices', invoices);
    saveToLocalStorage('LoggedInUser', user);

    alert('Checkout successful! Invoice generated.');
    
    window.location.href = 'invoice.html';
});
