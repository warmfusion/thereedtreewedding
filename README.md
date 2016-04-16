# The Reed Tree Wedding

Welcome to the source code for the wedding website of Rob and Caroline.


## Creating new pages

Create a new file, with a `.md` file extension in the `_sections` folder.

Add the following snippet at the top of the file to help the website work out
a few details used for navigation and ordering;

```
---
layout: section
anchor: schedule
order: 2
---
```

You should change the `anchor` value to the name you'd like to use in the sidebar
link list.

The `order` value stipulates where in the main sections this new page should be
placed. Note; If you want to put the page between other existing pages you may
need to update all the page orders for pages that come after the new section.


## Formatting sections

This website uses a formatting technique called Markdown.

You can find an introduction into how this works at [markdowntutorial.com](http://www.markdowntutorial.com/)


# References

* Core Theme - [hydejack](http://qwtel.com/hydejack/)
* Secret Code
    * Amazing Tardis - http://codepen.io/joshnetherton/pen/maDxd
    * Cheet - http://lou.wtf/cheet.js/
    * Sound effect - http://www.moviesoundclips.net/sound.php?id=85
