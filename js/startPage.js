const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
let feeds = [
    {

        "name": "Hackaday",
        "url": "https://hackaday.com/blog/feed/"
    },
    {
        "name": "Wired",
        "url": "https://www.wired.com/feed/rss"
    },
    {
        "name": "SciAm",
        "url": "http://rss.sciam.com/ScientificAmerican-Global"
    },
    {
        "name": "Engadget",
        "url": "https://www.engadget.com/rss.xml"
    },
    {
        "name": "HackerNews",
        "url": "https://news.ycombinator.com/rss"
    }
    ,
    {
        "name": "SlickDeals",
        "url": "https://slickdeals.net/newsearch.php?mode=frontpage&searcharea=deals&searchin=first&rss=1"
    }
    ,
    {
        "name": "Weather",
        "url": "http://www.rssweather.com/zipcode/77410/rss.php"
    }
    ,
    {
        "name": "WeatherCL",
        "url": "http://www.rssweather.com/zipcode/77058/rss.php"
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
            if (feedName != 'Weather') {
                mydiv.insertAdjacentHTML('beforeend', '<p>' + entry.content.slice(0, 150) + '...</p');
            }
            else {
                mydiv.insertAdjacentHTML('beforeend', '<p>' + entry.content + '</p');
            }
        })
    })
}
);