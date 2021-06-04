interface Link {
    url: string;
    description?: string;
    id?: number;
    [index: string]: any;
}

interface TranslatedLink extends Link {
    language: string;
}

const link1: TranslatedLink = {
    description:
        "TS",
    id: 1,
    url: "https://github.com/Ethan1498/TypeScript",
    language: "en"
};

function filterByTerm(
    input: Array<Link>,
    searchTerm: string,
    lookupKey: string = "url"
) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}

const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };

const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

const term: string = "java";
  
filterByTerm(arrOfLinks, term);