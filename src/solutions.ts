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

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};

const courses: Course[] = [
    { title: 'TypeScript Mastery', students: 120, isPublished: true },
    { title: 'Draft Course', students: 200, isPublished: false },
    { title: 'Basic HTML', students: 45, isPublished: true },
    { title: 'Next.js Pro', students: 85, isPublished: true },
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
};

const users = [
    { id: 1, name: 'Rakib', role: 'Admin' },
    { id: 2, name: 'Sadia', role: 'Editor' },
    { id: 3, name: 'Tariq', role: 'Subscriber' },
];

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager('Alice', 50000, 'Engineering');
manager.getDetails();
manager.getRoleInfo();

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error('Access Denied: Must be 18 or older'));
        } else {
            setTimeout(() => {
                resolve('Access Granted');
            }, 1000);
        }
    });
};
