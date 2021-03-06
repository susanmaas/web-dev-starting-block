---
title: "Stupid Mistakes in Web Development"
date: "2020-05-12"
---
Sometimes you need to make big changes in your code to get something to work.

And sometimes, you're just an idiot.

Here's my latest "I'm such an idiot!" moment:

A few days ago, I picked up this blog again. I'd started it several months ago, but then had to put it aside because of other commitments. 

The blog still worked fine live, but when I tried to open a local development server, I got an error message. I also couldn't get Git to work. What was happening? Why wasn't it working? Had something changed since I'd last worked on it? Did I need to update something? What could cause this?

I spent at least an hour scouring the internet for information, trying to find someone who'd had the same problem, looking for possible reasons.

By then it was the middle of the night, so I gave up and went to bed, discouraged and frustrated. But, I told myself I'd find a solution. There's always a solution.

A couple days later, I opened it up again.

I typed ls in the command line to see what files were in my current directory and found out that **I WAS IN THE WRONG DIRECTORY THE WHOLE TIME!**

My code was in a directory that had a similar name to its parent directory, so I didn't realize I was actually in the parent directory.

So, here's what I'm taking from this:

1. Maybe I should re-think my directory names

2. I'm a total idiot

But, I'm sharing my idiot moment with you because I think it's easy for lots of us to be idiots when we're doing web development, especially as beginners: the code doesn't work because of a typo, or because you forgot to put a script tag to link your JavaScript file to your HTML file, or your styles aren't working because the href you put to link up your style sheet doesn't match the actual name of the style sheet.

That's why patience is so important, and why it's good to take breaks.

And because whether it's a dumb mistake, or something bigger, there's always some kind of solution. Most of the time it's just a matter of being patient, and looking until you see it. 