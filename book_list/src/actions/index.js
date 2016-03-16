export function selectBook(book){
    // selectBook is an Action creator, it needs to return an action
    // an object with type and property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
