
const showUserFrequency = () => {
    const users = getFromLocalStorage('RegistrationData');  
    if (!users || users.length === 0) {
        console.log('No users found.');
        return;
    }

    
    const genderCounts = users.reduce((acc, user) => {
        acc[user.gender] = (acc[user.gender] || 0) + 1;
        return acc;
    }, {});

    
    const userFrequencyContainer = document.getElementById('userFrequency');
    if (userFrequencyContainer) {
        userFrequencyContainer.innerHTML = `
            <h3>User Frequency</h3>
            <p>Male: ${genderCounts.Male || 0}</p>
            <p>Female: ${genderCounts.Female || 0}</p>
            <p>Other: ${genderCounts.Other || 0}</p>
        `;
    }
};


const showInvoices = () => {
    const invoices = getFromLocalStorage('AllInvoices');  
    if (!invoices || invoices.length === 0) {
        console.log('No invoices found.');
        return;
    }

   
    const invoiceListContainer = document.getElementById('invoiceList');
    if (invoiceListContainer) {
        invoiceListContainer.innerHTML = invoices.map(invoice => `
            <div class="invoice">
                <h3>Invoice #: ${invoice.invoiceNumber}</h3>
                <p>Date: ${new Date(invoice.date).toLocaleDateString()}</p>
                <p>Name: ${invoice.name}</p>
                <p>Amount: $${invoice.payment}</p>
            </div>
        `).join('');
    }
};


window.onload = () => {
    showUserFrequency();
};
