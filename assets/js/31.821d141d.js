(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{311:function(e,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Functions are recipes, but we can also give them special inputs called "),t("code",[e._v("parameters")]),e._v(" that can make them slightly different each time.  Turns out, we've already done this before!\nThe "),t("code",[e._v("x")]),e._v(" and "),t("code",[e._v("y")]),e._v(" coordinates we entered are "),t("code",[e._v("parameters")]),e._v(".  To make a function that accepts a parameter, we include its name inside the parentheses when we define it:")]),e._v(" "),t("iframe",{attrs:{width:"100%",height:"200",src:"https://trinket.io/tools/1.0/jekyll/embed/python#code=def%20my_function%28parameter%29%3A%0A%20%20%20%20print%28parameter%29%0A%0Amy_function%28%22Hello%21%22%29%0Amy_function%28%22Bonjour%21%22%29",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:""}}),e._v('\n In the example above we **call** `my_function` twice, once with a parameter we defined as "Hello!", and another time with the parameter "Bonjour!".  The function does the same thing, print the parameter, but we get to tell it what to print.\n'),t("p",[e._v("In the previous example, where Tina made cakes, we told here "),t("strong",[e._v("where")]),e._v(" to make cakes by including an "),t("code",[e._v("x")]),e._v(" and "),t("code",[e._v("y")]),e._v(" coordinate.  Here's how we'd tell her to make a cake at the x,y point 0,100:")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("make_cake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Great- this means that we can write a function that tells Tina how to print different things.")]),e._v(" "),t("p",[e._v("Can you modify this example so that the function "),t("code",[e._v("say()")]),e._v(" is "),t("strong",[e._v("called")]),e._v(" with different "),t("code",[e._v("parameter")]),e._v(" inputs?")]),e._v(" "),t("iframe",{attrs:{width:"100%",height:"800",src:"https://trinket.io/tools/1.0/jekyll/embed/python#code=import%20turtle%0Atina%20%3D%20turtle.Turtle%28%29%0Atina.shape%28%27turtle%27%29%0A%0Atina.penup%28%29%0Atina.goto%28-60%2C175%29%0A%0Adef%20say%28something%29%3A%0A%20%20%20%20x%2C%20y%20%3D%20tina.pos%28%29%0A%20%20%20%20tina.write%28%22You%20told%20me%20to%20say%20this%3A%22%29%0A%20%20%20%20tina.goto%28x%20%2B%2010%2C%20y%20-10%29%0A%20%20%20%20tina.write%28something%29%0A%20%20%20%20tina.goto%28x%2C%20y%20-%2025%29%0A%20%20%20%20%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29%0Asay%28%22Hi%20there%21%22%29",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:""}}),e._v(" "),t("p",[e._v("Hints:")]),e._v(" "),t("ul",[t("li",[e._v("Tina will need anything she says to be in "),t("strong",[e._v("quotes")]),e._v(" ("),t("code",[e._v('"')]),e._v(") so she can read it.")]),e._v(" "),t("li",[e._v("You can make Tina say even more things!  Just add another line with "),t("code",[e._v('say("Your message here")')])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Thanks to Trinket.io for providing this assignment,\npart of their "),t("a",{attrs:{href:"https://hourofpython.com/a-visual-introduction-to-python/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hour of Python"),t("OutboundLink")],1),e._v("\ncourse.")])])}),[],!1,null,null,null);t.default=r.exports}}]);