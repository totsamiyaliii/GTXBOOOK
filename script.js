const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search');
const toggleDark = document.getElementById('toggle-dark');

let currentBooks = [...books];

function displayBooks(filteredBooks) {
  booksContainer.innerHTML = '';
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

  filteredBooks.forEach(book => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';

    const isSaved = savedBooks.includes(book.file);

    col.innerHTML = `
      <div class="book-card">
        <span class="heart ${isSaved ? 'saved' : ''}">${isSaved ? '❤️' : '🤍'}</span>
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

    const heart = col.querySelector('.heart');
    heart.addEventListener('click', () => {
      const saved = JSON.parse(localStorage.getItem('savedBooks')) || [];
      const file = book.file;

      if (saved.includes(file)) {
        const index = saved.indexOf(file);
        saved.splice(index, 1);
        heart.classList.remove('saved');
        heart.textContent = '🤍';
      } else {
        saved.push(file);
        heart.classList.add('saved');
        heart.textContent = '❤️';
      }

      localStorage.setItem('savedBooks', JSON.stringify(saved));
    });

    booksContainer.appendChild(col);
  });
}

searchInput.addEventListener('input', e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = currentBooks.filter(book =>
    book.title.toLowerCase().includes(keyword) ||
    book.author.toLowerCase().includes(keyword)
  );
  displayBooks(filtered);
});

const sortSelect = document.getElementById('sort-select');

sortSelect.addEventListener('change', () => {
  const value = sortSelect.value;

  if (value === 'az') {
    currentBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (value === 'za') {
    currentBooks.sort((a, b) => b.title.localeCompare(a.title));
  } else if (value === 'year-asc') {
    currentBooks.sort((a, b) => a.year - b.year);
  } else if (value === 'year-desc') {
    currentBooks.sort((a, b) => b.year - a.year);
  }

  displayBooks(currentBooks);
});

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleDark.innerHTML = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleDark.innerHTML = '🌙 Dark Mode';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleDark.innerHTML = '☀️ Light Mode';
  } else {
    toggleDark.innerHTML = '🌙 Dark Mode';
  }

  displayBooks(currentBooks);

  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const genre = btn.getAttribute('data-genre');

      if (genre === 'all') {
        displayBooks(books);
      } else {
        const filteredBooks = books.filter(book => book.genre === genre);
        displayBooks(filteredBooks);
      }
    });
  });
});