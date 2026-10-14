
function isValidBangladeshiNumber(phoneNumber) {
    const pattern = /^(01[3-9]\d{8}|\+8801[3-9]\d{8}|8801[3-9]\d{8})$/;

    return pattern.test(phoneNumber);
}
