const multiplyValue = (value: number, multiplier: number = 2) => {
    return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    if (typeof value === 'boolean') {
        return value ? 'Active' : 'Inactive';
    }

    throw new Error('Invalid input type');
};
