interface IPerson {
    name: string;
    city: string;
    age: number;
    printDetails(): string;
}

const tom: IPerson = {
    name: "Tom",
    city: "Manchester",
    age: 23,
    printDetails: function() {
        return `${this.name} - ${this.city}`;
    }
};