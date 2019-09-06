---
title: "Cloning a Gatsby Repository in Github"
date: "2019-09-06"
---
If you're in Github and you want to clone a project built with Gatsby, if you try to do git clone https://somerepoingithub.git, it's not going to work. It will create a file, but you won't be able to open your development server. Instead, you need to use gatsby new nameofmynewclonedsite https://somerepoingithub.git. This is the same way you would use a gatsby starter. Now your freshly cloned project should work.