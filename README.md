# NES Character Selector

A simple web app built with React and styled using [NES.css](https://github.com/nostalgic-css/NES.css) to give it a nostalgic NES look and feel. This app allows users to select their favorite NES character from a list and displays a short description along with the games in which the character appears.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.3.4-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
```
git clone https://github.com/felagund1789/nes-character-selector.git
cd nes-character-selector
```

2. **Install dependencies:**
```
npm install
```

3. **Start the development server:**
```
npm run dev
```
The app should now be running on [http://localhost:5173](http://localhost:5173).

## Usage

To use the NES Character Selector, start the development server and navigate to the provided local URL in your browser. Once the app is running, you can explore the character selection screen, choose your favorite NES character, and view their details, including a brief description and a list of games they appear in.

## Features

- **Character Selection Screen**: Users can choose their favorite NES character from a list.
- **Character Information**: Upon selection, a short description of the character and a list of games in which the character appears are displayed.
- **Submit Button**: A button allows users to submit their selection and display a success message.
- **Error and Success Messages**: Error and success messages are shown in order to inform users about the validity of their submission.
- **Favorite Power-ups**: Using checkboxes the users can select their favorite power-ups associated with the chosen character.
- **Responsive Design:** Users can enjoy a responsive UI built using [CSS @media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries), ensuring a great experience on both desktop and mobile devices.

## Contributing

Contributions are welcome! Please follow these steps:

1. Clone the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## Acknowledgements

- [NES.css](https://github.com/nostalgic-css/NES.css) for providing the CSS framework that brings the nostalgic NES style to the web app.

---

Built as a proof of concept to explore the capabilities of NES.css and React. Not intended for commercial use.
