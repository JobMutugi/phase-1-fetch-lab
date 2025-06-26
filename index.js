function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderBooks(data))
    .catch(error => {
      console.error("Fetch error:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; 
  
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; 
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
