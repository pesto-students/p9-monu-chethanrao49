# Exercise 1.1

Source: [enter link description here](http://taligarsiel.com/Projects/howbrowserswork1.htm#Render_tree_construction)

## a )  What is the main functionality of the browser?

A web browser, also known as a “browser,” is an application software that allows users to find, access, display, and view websites. Microsoft Internet Explorer, Google Chrome, Mozilla Firefox, and Apple Safari are all popular web browsers.

![Server Client Image](https://previews.dropbox.com/p/thumb/ABvIsd-8uW2-h97koQBERY-IS4_U2YLB5nBRg_eWzuRRqCmxURCkYTwQ5XZOpIPhzanybVGvGvSHn5MacOFh79O9xVKqvraTmf-yD0y8RYu_UIH-kz1QrYH6vLU4DgL35C7VXngItu6WCBBZnBwNEh1QPpM7zJEU2c0IetZ501SpbSh67PnWUe6ocgZoG7kGBDBVpot18ecX6-lmRVjXnvbWbUfJACV41qIAIKmxv6aD59O_DlhgQPNogMUcyUGaJIJ9iYPpuzPw4Jsvmf6bq7XRGU_e-VuUojtaXddTNDR6fh-qO-y9-65mNcQMEfvMhFVbgMXib3Jvl17FTIM_uj093JqnS-G79MisF6T5zOZGRB0uhaZjnGLPt0lxujvuk_c/p.png)

**URL Syntax**

    http://xyz.api-example.com/api/odata/businessobject/incidents?$search=Printer
  

 1.   **(Required)** Protocol Specifies the protocol to be used for interacting with Internet and it is followed by ://
 2.   **(Required)** Base URL consists of
`http://xyz.api-example.com`
`<protocol>://<subdomian>.<domain>`
Domain part can use wither Doman name for DNS resolution or use IP address
 3.   **(Required)** Which is followed by path of the resource.
    `<protocol>://<subdomian>.<domain>/path`
    Example: api/odata/businessobject/incidents
 4.   **(Optional)** Which is followed by path of the resource.
    `<protocol>://<subdomian>.<domain>/path?<query parameters>`
    Example: ?$search=Printer

**Browser's functionality**
Basically browser consists of the following UI elements:

 1. Address bar to insert a URI (Uniform Resource Identifier).
 2. Refresh, forward, backward, bookmark and home buttons.
 
When a user enters a URI inside the address bar, a HTTP(Hyper Text Terminal Protocal) request will be sent   for a server and server will search the requested content on the server and server response with the data which then will be displayed on the browser.

Note: A Browser can display only the HTML and CSS.
##
## b )  High Level Components of a browser.
The following are the main components of a browser:

 1. **User Interface (UI):** UI is the face  of a browser where user interacts with the browser and it provides many UI elements for a user to interact with the browser.
 2. **Browser Engine:** Acts as a interface between the User Interface and the render Engine.
 3. **Render Engine:** Which is responsible for displaying the content which will be in the HTML and CSS form. By using parsing the content will be parsed on the display.
 4. **Networking:**  Calls like HTTP requests will be performed and  under the hood it is platform specific.
 5. **UI Backend:** Used for drawing basic widgets and will be generic accross the platforms.
 6. **Javascript Interpreter:** Which will parse and execute the Javascript code.
 7. **Data Storage:** The browser have to store the data locally hence data presistence will help with it.

![enter image description here](http://taligarsiel.com/Projects/layers.png)


##

# c ) Rendering engine and its use

The document's contents will be rendered on the browser's screen by a rendering engine, which will parse the raw HTML and CSS to display it.

**The main flow**
The content of the requested document will begin to arrive at the rendering engine from the networking layer. Typically, 8 kB chunks will be used for this.

After that, this is the basic flow of the rendering engine:
![enter image description here](http://taligarsiel.com/Projects/flow.png)
Starting with the HTML page, the rendering engine will parse it and convert the tags to DOM nodes in a tree known as the "content tree." It will parse the style information included in style elements as well as external CSS files. Another tree, the render tree, will be created using the stylistic details and visual instructions in the HTML.

Rectangles with visual characteristics like colour and size can be found in the render tree. The rectangles are arranged correctly so that they may be seen on the screen.


The render tree goes through a layout procedure after being built. This entails providing each node with its precise location on the screen.
The next step is painting, which involves iterating through the render tree and applying paint to each node using the UI backend layer.

This happens gradually. The rendering engine will attempt to display data as fast as feasible to improve user experience. It won't wait for all of the HTML to be processed before constructing and setting up the render tree. While the procedure proceeds with the remaining stuff that keeps coming from the network, portions of the content will be processed and presented.

![enter image description here](http://taligarsiel.com/Projects/webkitflow.png)
web kit main flow

![enter image description here](http://taligarsiel.com/Projects/image008.jpg)
Mozilla's Gecko rendering engine main flow

##
## d) Parsers (HTML, CSS, etc)
Parsing plays an significant role within the render engine. 

Parsing a document means translating it to some structure that makes sense. Typically, parsing produces a tree of nodes that depicts the document's structure. A parse tree or syntax tree is what it is known as.

Parsing is separated into two sub processes - lexical analysis and syntax analysis.

Tokenizing the input is the process of lexical analysis. The vocabulary of a language is made up of valid building blocks, which are known as tokens. All the words from that language's vocabulary will make up the phrase in human language.

The application of linguistic syntax rules is known as syntax analysis.

The lexer, also known as a tokenizer, breaks the input into valid tokens, and the parser, which creates the parse tree by examining the document structure in accordance with the language syntax rules, typically divides the work between the two components. The lexer is skilled at removing superfluous characters like line breaks and white spaces.

![enter image description here](http://taligarsiel.com/Projects/image011.png)
from source document to parse trees

Iterative parsing is employed. Typically, the parser will request a new token from the lexer and attempt to match the token with a syntactic rule. A node matching to the token will be added to the parse tree if a rule is matched, and the parser will then request another token.
If no rule matches, the parser will internally store the token and keep requesting tokens until a rule is found that matches every token that has been internally saved. If no rule is identified, an exception will be raised by the parser. This indicates that there were syntax issues and the document was invalid.

**HTML Parser & **CSS Parser****
The HTML parser will parse the HTML markup into a parse tree.
The syntax and vocabulary of HTML are defined by W3C organization.
HTML5 is the latest version of HTML.

Unlike HTML, CSS is a context free grammar and can be parsed using the types of parsers described earlier.

**DOM**
A tree of DOM element and attribute nodes makes up the parse tree. Document object model is abbreviated as DOM. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.
The root of the tree is the "Document" object.

The DOM has an almost one to one relation to the markup. Example, this markup:

    <html>
	<body>
		<p>
			Hello World
		</p>
		<div> <img src="example.png"/></div>
	</body>
</html>
Would be translated to the following DOM tree:

![enter image description here](http://taligarsiel.com/Projects/image015.png)


##
## e) Script Processors
Source: [enter link description here](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode)

The Script Processor provides interface that allows the generation, processing, or analyzing of audio using JavaScript.

The ScriptProcessorNode interface is an [AudioNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) audio-  processing module that is linked to two buffers, one containing the input audio data, one containing the processed output audio data. An event, implementing the [AudioProcessingEvent](https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent) interface, is sent to the object each time the input buffer contains new data, and the event handler terminates when it has filled the output buffer with data.

![enter image description here](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/webaudioscriptprocessingnode.png)


##

## f) Tree Construction:
Source: [enter link description here](https://web.dev/critical-rendering-path-render-tree-construction/#:~:text=The%20DOM%20and%20CSSOM%20trees,the%20pixels%20to%20the%20screen.)

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.

In the previous section on constructing the object model, we built the DOM and the CSSOM trees based on the HTML and CSS input. However, both of these are independent objects that capture different aspects of the document: one describes the content, and the other describes the style rules that need to be applied to the document.

First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node.

![enter image description here](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=1428)
**Scripts**
Scripts are synchronous in nature, scripts will  block the execution of the document until script is fully done.
When scripts are linked externally, then script should be first fetched by an http request for the resources.
 The author can make script as "defer" and thus it act asynchronously without blocking the other parsing and gets executed in different thread.

**Speculative parsing**
Webkit and gecko has optimized the engines to handle these asynchronously and on multi-thread without affecting the DOM to work on lower end network and hardware devices.

**Style Sheets**
Since style sheet will not chagne the DOM tree  it will not block the document parsing.

But there's a edge case where style sheet is not loaded can lead to a improper display of elements.

##

## g) Order of Script processing:

JavaScript performance in the browser is arguably the most important usability issue facing developers. The problem is complex because of the blocking nature of JavaScript, which is to say that nothing else can happen while JavaScript code is being executed. In fact, most browsers use a single process for both user interface (UI) updates and JavaScript execution, so only one can happen at any given moment in time. The longer JavaScript takes to execute, the longer it takes before the browser is free to respond to user input.

Order of execution in JavaScript is dependent on the following components working together to pass and order information.

-   The Callstack
-   The Event Loop
-   The Task Queue
-   WebAPIs/External Resources

We can think through the order of execution using the (sometimes headache inducing) example of the asynchronous fetch request.

A very simple fetch request might look something like this

    fetch(url)  
    .then(res => res.json())  
    .then(json => {  
    this.setFetchResults(json.items)  
    }

You fetch some data, you parse to json, and then you pass that json into another function and do something with it. Fairly straightforward.

Now, if this fetch request happens as part of a larger function, at the beginning of that function, JavaScript will essentially put it to the side, and wait for the response (let’s say in this case from an external API), and continue moving down the function.

Eventually, hopefully, there is either a response from the external API (whether an error, or the data we’re expecting) or a set timeout. Then, this information is passed to the task queue.

As the call stack is cleared, the Event Loop passes information from the task queue back to the call stack to finish executing the function.


##

## h) Layout And Painting:

**Layout:** _Layout_ is the process by which the width, height, and location of all the nodes in the render tree are determined, plus the determination of the size and position of each object on the page. _Reflow_ is any subsequent size and position determination of any part of the page or the entire document.

Once the render tree is built, layout commences. The render tree identified which nodes are displayed (even if invisible) along with their computed styles, but not the dimensions or location of each node. To determine the exact size and location of each object, the browser starts at the root of the render tree and traverses it.

On the web page, almost everything is a box. Different devices and different desktop preferences mean an unlimited number of differing viewport sizes. In this phase, taking the viewport size into consideration, the browser determines what the dimensions of all the different boxes are going to be on the screen. Taking the size of the viewport as its base, layout generally starts with the body, laying out the dimensions of all the body's descendants, with each element's box model properties, providing placeholder space for replaced elements it doesn't know the dimensions of, such as our image.

**Painting:** In the painting or rasterization phase, **the browser converts each box calculated in the layout phase to actual pixels on the screen**. Painting involves drawing every visual part of an element to the screen, including text, colors, borders, shadows, and replaced elements like buttons and images.

Painting can break the elements in the layout tree into layers. Promoting content into layers on the GPU (instead of the main thread on the CPU) improves paint and repaint performance. There are specific properties and elements that instantiate a layer, including [<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) and [<canvas>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas), and any element which has the CSS properties of [opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity), a 3D [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), [will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change), and a few others. These nodes will be painted onto their own layer, along with their descendants, unless a descendant necessitates its own layer for one (or more) of the above reasons.

Layers do improve performance, but are expensive when it comes to memory management, so should not be overused as part of web performance optimization strategies
