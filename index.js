const yargs = require('yargs');
const { fetchMovies } = require('./tmdb');

yargs.command({
  command: 'run',
  describe: 'Run TMDB CLI tool',
  builder: {
    type: {
      describe: 'Type of movies',
      demandOption: true,
      type: 'string',
    },
  },
  handler: async (argv) => {
    try {
      const movies = await fetchMovies(argv.type);
      movies.forEach((movie, i) => {
        console.log(`${i + 1}. ${movie.title} (${movie.release_date})`);
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  },
}).argv;
