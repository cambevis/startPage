const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
let feeds = [
    {

        "name": "Hackaday",
        "url": "https://hackaday.com/blog/feed/"
    },
    {
        "name": "HackerNews",
        "url": "https://news.ycombinator.com/rss"
    }
];
feeds.forEach(feedItem => {
    let feedURL = feedItem.url;
    let feedName = feedItem.name;
    //console.log(feedItem.name);
    let parser = new RSSParser();
    parser.parseURL(CORS_PROXY + feedURL, function (err, feed) {
        if (err) throw err;
        console.log(feed);
        feed.items.slice(0, 5).forEach(function (entry) {
            mydiv = document.getElementById(feedItem.name);
            mydiv.insertAdjacentHTML('beforeend', '<a class="has-text-weight-bold"  href="' + entry.link + '" target="_blank">' + entry.title + '</a>');
            mydiv.insertAdjacentHTML('beforeend', '<p>' + entry.content.slice(0, 125) + '...</p');
        })
    })
}
);