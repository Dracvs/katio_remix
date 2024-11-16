
export async function getAllAuthors()
{
    const authors = fetch("http://localhost:5170/api/Author/GetAllAuthors");
    return authors;
}

// export async function getAllAuthorsByName(name: string)
// {
//     return "";
// }

// export async function createAuthor(author: Author)
// {
//     return "";
// }

    