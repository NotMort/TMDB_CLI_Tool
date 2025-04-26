# TMDB CLI Tool

A command-line application to fetch and display movie information from The Movie Database (TMDB) API.

## Features

- Retrieve lists of popular, top-rated, upcoming, or now-playing movies
- Display movie titles, release dates, and overviews in the terminal

## Prerequisites

- Node.js installed
- TMDB API key

## Installation

1. Clone the repository:
   git clone https://github.com/NotMort/TMDB_CLI_Tool.git
   cd TMDB_CLI_Tool

2. Install dependencies:
   npm install

3. Configure your TMDB API key:
   - Create a `.env` file in the root directory
   - Add the following line:
     TMDB_API_KEY=your_api_key_here

## Usage

Run the CLI tool with the desired category:
node index.js --type=popular

Available categories:
- popular
- top
- upcoming
- playing
