function createPhoneNumber(numbers) {
    let cleaned = ('' + numbers).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
    return null
}

console.log(createPhoneNumber(1423909980));