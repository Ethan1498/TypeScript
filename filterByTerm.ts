interface Link {
    url: string;
    description?: string;
    id?: number;
    [index: string]: any;
}
// the new label
type Links = Array<Link>;
// the new label

function filterByTerm(
  input: Links,
  searchTerm: string,
  lookupKey: string = "url"
): Links {
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

const arrOfLinks: Links = [obj1, obj2, obj3];

filterByTerm(arrOfLinks, "string3");