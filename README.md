# Bulk LinkedIn Posts Deletion

Automate deleting LinkedIn posts or reposts using Playwright and JavaScript.

## Demo

![Bulk LinkedIn Posts Deletion Demo](assets/demo.gif)

This script logs into LinkedIn, navigates to your activity page, deletes the most recent post, and refreshes the page. It repeats this process until the configured deletion limit is reached.

This approach avoids DOM inconsistencies that occur when scrolling through the activity feed, which can cause posts to be skipped.

## Features

- Automatically logs into LinkedIn

- Deletes posts/reposts from your activity page

- Configurable maximum deletion count

- Simple configuration using environment variables

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

## Setup

Create a `.env` file in the root directory.

```
LINKEDIN_ACTIVITY=https://www.linkedin.com/in/username/recent-activity/shares/
```

## Configuration

Edit `settings.js` to control how many posts will be deleted.

```
module.exports = {
  activityUrl: process.env.LINKEDIN_ACTIVITY,
  maxDeletes: 200, // Modify this
};
```

## Usage

Run the script:

```
node main.js
```

The script will:

1. Log in to LinkedIn

2. Open your activity page

3. Delete the first post

4. Refresh the page

5. Repeat until the limit is reached

## Notes

- Deleting posts is permanent and cannot be undone.

- 0Adjust `maxDeletes` carefully to avoid removing posts unintentionally.

- LinkedIn UI changes may require updates to selectors in the script.

## Disclaimer

This project is for educational and personal automation purposes. Use responsibly and ensure compliance with \*\*LinkedIn's terms of service.

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
├── config/
│   └── settings.js        # URLs, limits
│
├── auth/
│   └── login.js           # login / session handling
│
├── actions/
│   ├── navigate.js        # go to activity pages
│   ├── deletePost.js      # delete a single post
│   └── deleteLoop.js      # iterate through posts
│
├── utils/
│   ├── logger.js
│
├── storage/
│   └── linkedin-session.json
│
└── logs/
    ├── deleted.log
    └── errors.log
```
