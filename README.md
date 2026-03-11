# Bulk LinkedIn Posts Deletion

Automate deleting LinkedIn posts or reposts using Playwright and JavaScript.

![Bulk LinkedIn Posts Deletion Demo](assets/demo.gif)

> Screen recording demo made using [Screen Now](https://screen.now/).

This script logs into LinkedIn, navigates to your activity page, deletes the most recent post, and refreshes the page. It repeats this process until the specified deletion limit is reached.

This method prevents issues where posts get skipped due to dynamic feed rendering on LinkedIn.

## Features

- Automatically logs into LinkedIn

- Deletes posts/reposts from your activity page

- Simple terminal input for number of posts to delete

## Requirements

- Node.js (v16+ recommended)

- A LinkedIn account

- Installed dependencies

## Installation

Clone the repo:

```
https://github.com/a14o/linkedin-cleaner.git
```

Install dependencies:

```
npm install
```

## Usage

Run the script:

```
node main.js
```

The script will:

1. Ask for the number of posts to be deleted

2. Log in to LinkedIn

3. Open your activity page

4. Delete the first post

5. Refresh the page

6. Repeat until the limit is reached

## Notes

- Deleting posts is permanent and cannot be undone.

- Make sure you enter the correct number of posts to delete.

- LinkedIn UI changes may require updates to selectors in the script.

## Disclaimer

This project is for **educational and personal automation purposes.** Use responsibly and ensure compliance with **LinkedIn's terms of service**.

## File Structure

```
linkedin-cleaner/
│
├── package.json
├── .env
├── .gitignore
│
├── main.js                # Entry point
│
├── auth/
│   └── login.js           # login and session handling
│
├── actions/
│   ├── navigate.js        # go to activity pages
│   ├── deletePost.js      # delete a single post
│   └── deleteLoop.js      # iterate through posts
│
├── utils/
│   ├── logger.js          # logging utility
│
├── storage/
│   └── linkedin-session.json
│
└── logs/
    ├── deleted.log
    └── errors.log
```
