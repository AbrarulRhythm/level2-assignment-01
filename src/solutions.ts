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
