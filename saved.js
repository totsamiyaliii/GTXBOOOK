const savedContainer = document.getElementById('saved-books-container');
const toggleDarkBtn = document.getElementById('toggle-dark');

// Saqlangan kitoblarni chiqarish
function displaySavedBooks() {
  const savedFiles = JSON.parse(localStorage.getItem('savedBooks')) || [];
  savedContainer.innerHTML = '';

  if (savedFiles.length === 0) {
    savedContainer.innerHTML = '<p>Saqlangan kitoblar yo‘q.</p>';
    return;
  }

  const savedBooks = books.filter(book => savedFiles.includes(book.file));

  savedBooks.forEach(book => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
      <div class="book-card">
        <img src="${book.cover}" alt="${book.title}">
        <div class="book-body">
          <h5>Nomi: ${book.title}</h5>
          <p>Aftor: ${book.author}</p>
          <p>Janr: ${book.genre}</p>
          <p>Yili: ${book.year}</p>
          <a href="${book.file}" target="_blank" class="btn btn-sm btn-primary">O‘qish</a>
          <a href="${book.file}" download class="btn btn-sm btn-success">Yuklab olish</a>
        </div>
      </div>
    `;

    savedContainer.appendChild(col);
  });
}

// DARK MODE tugmasi ishlashi
toggleDarkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleDarkBtn.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleDarkBtn.textContent = '🌙 Dark Mode';
  }
});

// Yuklanganda holatni tekshirish
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleDarkBtn.textContent = '☀️ Light Mode';
  } else {
    toggleDarkBtn.textContent = '🌙 Dark Mode';
  }

  displaySavedBooks();
});


