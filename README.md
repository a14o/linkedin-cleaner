linkedin-cleaner/
│
├── package.json
├── .env
├── .gitignore
│
├── main.js                # Entry point
│
├── config/
│   └── settings.js        # limits, delays, URLs
│
├── auth/
│   └── login.js           # login / session handling
│
├── actions/
│   ├── navigate.js        # go to activity pages
│   ├── deletePost.js      # delete a single post
│   └── deleteLoop.js      # iterate through posts
│
├── scraper/
│   └── loadPosts.js       # scrolling + collecting post menus
│
├── utils/
│   ├── delay.js
│   ├── logger.js
│   └── random.js
│
├── storage/
│   └── linkedin-session.json
│
└── logs/
    ├── deleted.log
    └── errors.log
