//Data
const films = [
    {
      title: 'Dupatta',
      year: '1952',
      language: 'Urdu',
      genre: 'Drama',
      synopsis: 'The film revolves around a girl who marries an army officer. They both soon have a baby daughter. Soon the husband is sent to the front of World War II. Later he is reported missing. After many months of anxiety and heartbreak, the husband returns disfigured, mutilated and not easily recognizable. The devoted wife still accepts him back despite his handicaps.',
      rating: 4,
      youtubeLink: 'https://www.youtube.com/watch?v=agY78f1W8s4',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Dupatta_%281952_film%29.jpg'
    },
  
    {
      title: 'Yakke Wali',
      year: '1957',
      language: 'Punjabi',
      genre: 'Romance',
      synopsis: 'The film revolves around a hardworking and brave Punjabi woman, Laali, who supports her family by driving a tanga. She drives around her village but one day owing to her fight with some of the villagers, she leaves the village and goes to the city of Lahore. Being a female in Lahore, it becomes difficult for her to drive the tanga, so she decides to disguise herself as a man and starts driving for her survival and to make a daily living.',
      rating: 5,
      youtubeLink: 'https://youtu.be/t7fg8RuEM3Y',
      poster: 'https://upload.wikimedia.org/wikipedia/en/0/00/Yakke_Wali.jpg'
    },
  
    {
        title: 'Jinnah',
        year: '1998',
        language: 'English',
        genre: 'History',
        synopsis: 'The film is a Pakistani-British epic biographical film which follows the life of the founder of Pakistan, Muhammad Ali Jinnah. ',
        rating: 4,
        youtubeLink: 'https://www.youtube.com/watch?v=NNacdrX-6Jc',
        poster: 'https://upload.wikimedia.org/wikipedia/en/1/15/Jinnah_movie_poster.jpg'
      },
  
      {
        title: 'Jago Hua Savera',
        year: '1959',
        language: 'Bengali',
        genre: 'Drama',
        synopsis: 'The film depicts the daily lives of East Pakistani fishermen in the village of Saitnol (near Dhaka) and their struggles with loan sharks.',
        rating: 4,
        youtubeLink: 'https://youtu.be/SLhQYYjPVlE',
        poster: 'https://a.ltrbxd.com/resized/film-poster/2/7/0/7/0/1/270701-the-day-shall-dawn-0-230-0-345-crop.jpg?v=6caafe3e70'
      },
  
      {
        title: 'Behan Bhai',
        year: '1968',
        language: 'Urdu',
        genre: 'Drama',
        synopsis: 'A woman and her five children are separated during the partitions chaos. Years later, they live separate lives, each struggling to survive, while their mother loses her sanity, searching for them.',
        rating: 4,
        youtubeLink: 'https://youtu.be/88GOseIpdQg ',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCklg57Juz2rd3Chz8R6M3gJo5j_vpQazNQ&s'
      },
  
      {
        title: 'Society Girl',
        year: '1976',
        language: 'Urdu',
        genre: 'Drama',
        synopsis: 'Ms. Juliana Wilson, a girl who is forced to sell her body to the highest bidder by night to support her ailing mother and her young sister Moona through an education. During the day Juliana works as a secretary but at night she is transformed into the sultry, seductive club going, chain smoking Society Girl',
        rating: 4,
        youtubeLink: 'https://youtu.be/fGBwahISNC0',
        poster: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Society_Girl_film.jpg'
      },
  
      {
        title: 'Maula Jutt',
        year: '1979',
        language: 'Punjabi',
        genre: 'Action',
        synopsis: 'Set in a village near Kabirwala, Maula Jatt, once a feared warrior, now maintains peace across 25 villages. When old enemies resurface, violence erupts again. Amid betrayals, battles, and shifting loyalties, Maula seeks justice, not revenge. In the end, he lays down his Gandasa, calling for peace and reconciliation.',
        rating: 4,
        youtubeLink: 'Part I: https://youtu.be/AYzxahsb80A',
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Maula_Jatt_%281979%29.jpg/330px-Maula_Jatt_%281979%29.jpg'
      },
  
      {
        title: 'Khuda Kay Liye',
        year: '2007',
        language: 'Urdu',
        genre: 'Thriller',
        synopsis: 'The film follows Mansoor and Sarmad, two singers whose lives changed after the attacks in America ',
        rating: 4,
        youtubeLink: 'https://youtu.be/mypSWkJr6W0',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Khuda-kay-liye.JPG'
      },
  
      {
        title: 'Bol',
        year: '2011',
        language: 'Urdu',
        genre: 'Drama',
        synopsis: 'It concerns a family facing financial difficulties caused by too many children and changing times, with a major plot involving the fathers desire to have a son and his rejection of his existing intersex child.',
        rating: 4,
        youtubeLink: 'https://www.youtube.com/watch?v=example1',
        poster: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Bol2011.jpg'
      },
  
      {
        title: 'Zinda Bhaag',
        year: '2013',
        language: 'Punjabi',
        genre: 'Drama',
        synopsis: 'The story of Zinda Bhaag unravels the theme of illegal immigration, called dunky. This involves inhuman and dangerous methods of crossing borders into foreign lands. It is a film about three young men trying to escape the reality of their everyday lives and succeeding in ways they had least expected. ',
        rating: 4,
        youtubeLink: 'https://youtu.be/vKEla_jFZg8',
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Zinda_Bhaag.jpg'
      },
  
      {
        title: 'Ho Mann Jahaan',
        year: '2015',
        language: 'Urdu',
        genre: 'Romance',
        synopsis: 'The film revolves around three main characters – Arhan, Manizeh, and Nadir. The story is about their friendship born out of shared experiences, passion for music, and aspiration for fame.',
        rating: 4,
        youtubeLink: 'https://youtu.be/wyL70mTONCw',
        poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/Ho_Mann_Jahaan.jpg'
      },
  
      {
        title: 'Waar',
        year: '2013',
        language: 'Urdu',
        genre: 'Action',
        synopsis: 'The film follows Major Mujtaba Rizvi, an officer, who returns from his retirement to save Pakistan from a major terrorist attack.',
        rating: 4,
        youtubeLink: 'https://youtu.be/ZVj-QoF-8dU',
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Waar_%28film_poster%29.jpg'
      },

  ];
  
function renderFilms(filmsToDisplay) {
  const container = document.getElementById('films-container');
  container.innerHTML = '';

  filmsToDisplay.forEach(film => {
    const filmCard = document.createElement('div');
    filmCard.classList.add('flip-card');

    filmCard.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${film.poster}" alt="${film.title}" />
        </div>
        <div class="flip-card-back">
          <strong>${film.title}</strong>
          <p><strong>Year:</strong> ${film.year}</p>
          <p><strong>Language:</strong> ${film.language}</p>
          <p><strong>Genre:</strong> ${film.genre}</p>
          <p><strong>Synopsis:</strong> ${film.synopsis}</p>
          <p><strong>Maryam's Rating:</strong> ${film.rating} ⭐</p>
          
        </div>
      </div>
    `;

    filmCard.onclick = () => {
      window.open(film.youtubeLink, '_blank');
    };

    container.appendChild(filmCard);
  });
}

// Initial render of all films
renderFilms(films);