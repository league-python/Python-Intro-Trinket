---
title: Tinas Grid

---


Tina's world is a grid of squares like the one we sometimes use to graph in Algebra and Geometry.  

<iframe src="//player.vimeo.com/video/107876386?title=0&amp;byline=0&amp;portrait=0" width="710" height="249" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

We can tell Tina to go directly to a specific point on the graph.  This makes it easy to teach her to draw something!

<iframe width="100%" height="800" src="https://trinket.io/tools/1.0/jekyll/embed/python#code=import%20turtle%0Atina%20%3D%20turtle.Turtle%28%29%0Atina.shape%28%27turtle%27%29%0A%0Atina.penup%28%29%0Atina.write%28%22I%20start%20at%200%2C%200%22%29%0A%0Atina.goto%28100%2C100%29%0Atina.write%28%22This%20is%20100%2C%20100%22%29%0A%0Atina.goto%28-100%2C-100%29%0Atina.write%28%22This%20is%20-100%2C%20-100%22%29%0A%0Atina.goto%28100%2C-100%29%0Atina.write%28%22This%20is%20100%2C%20-100%22%29%0A%0Atina.goto%28-100%2C100%29%0Atina.write%28%22This%20is%20-100%2C%20100%22%29%0A%0Atina.goto%28-100%2C%200%29" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

The grid goes from -200 to 200 in both directions.  You can send Tina to points outside her grid, but then you won't see what she's doing.

<iframe width="100%" height="800" src="https://trinket.io/tools/1.0/jekyll/embed/python#code=import%20turtle%0Atina%20%3D%20turtle.Turtle%28%29%0Atina.shape%28%27turtle%27%29%0A%0Atina.goto%28200%2C200%29%0Atina.goto%28-200%2C200%29%0Atina.goto%28200%2C-200%29%0Atina.goto%28-200%2C-200%29%0Atina.goto%280%2C0%29%0A%0Atina.write%28%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20This%20is%20how%20big%20my%20grid%20is%21%22%29" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Play around drawing with Tina.  Send her to other points on the grid with a new line like this:

```python
tina.goto(37,-50)
```
You can pick whatever numbers you want, but they must be between `-200` and `200` for you to see them.

---

Thanks to Trinket.io for providing this assignment, 
part of their [Hour of Python](https://hourofpython.com/a-visual-introduction-to-python/) 
course.
