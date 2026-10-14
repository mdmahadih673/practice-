function calculateCartTotal(items, taxRate) {

    let subtotal = 0;

    for (const item of items) {

        const itemTotal =
            item.price *
            item.quantity *
            (1 - item.discount / 100)

        subtotal += itemTotal;
    }
    const total = subtotal * (1 + taxRate / 100);
    return Number(total.toFixed(2))
}


console.log(
    calculateCartTotal([
        { price: 100, quantity: 2, discount: 10 },
        { price: 50, quantity: 1, discount: 0 }
    ], 10)
);