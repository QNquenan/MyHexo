var posts=["posts/41885.html","posts/52089.html","posts/35360.html","posts/51385.html","posts/49684.html","posts/36597.html","posts/62222.html","posts/29665.html","posts/51705.html","posts/56982.html","posts/32069.html","posts/42329.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}