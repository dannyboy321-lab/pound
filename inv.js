const displayInvoice = () => {
    const invoiceDetails = document.getElementById('invoiceDetails');
    const user = JSON.parse(localStorage.getItem('LoggedInUser'));

    if (!user || !user.invoices || user.invoices.length === 0) {
        invoiceDetails.innerHTML = '<p>No invoices found.</p>';
        return;
    }

    const invoice = user.invoices[user.invoices.length - 1];
    
    invoiceDetails.innerHTML = `
        <h3>Invoice #: ${invoice.invoiceNumber}</h3>
        <p><strong>Date:</strong> ${new Date(invoice.date).toLocaleDateString()}</p>
        <p><strong>Name:</strong> ${invoice.name}</p>
        <p><strong>Address:</strong> ${invoice.address}</p>
        <p><strong>Total Payment:</strong> $${invoice.payment}</p>
        <h4>Items:</h4>
        <ul>
            ${invoice.cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('')}
        </ul>
    `;
};

const goToCheckout = () => {
    window.location.href = 'checkout.html';
};

window.onload = displayInvoice;

document.getElementById('nextButton')?.addEventListener('click', goToCheckout);
