"use strict";
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const processInput = (value) => {
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
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error('Access Denied: Must be 18 or older'));
        }
        else {
            setTimeout(() => {
                resolve('Access Granted');
            }, 1000);
        }
    });
};
