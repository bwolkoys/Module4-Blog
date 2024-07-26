## User Story

AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences


## Acceptance Criteria

- GIVEN a personal blog
- WHEN I load the app,
- THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
- WHEN I submit the form,
- THEN blog post data is stored to localStorage.
- WHEN the form submits,
- THEN I am redirected to the posts page.
- WHEN I enter try to submit a form without a username, title, or content,
- THEN I am presented with a message that prompts me to complete the form.
- WHEN I view the posts page,
- THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
- WHEN I click the light mode/dark mode toggle,
- THEN the page content's styles update to reflect the selection.
- WHEN I click the "Back" button,
- THEN I am redirected back to the landing page where I can input more blog entries.
- WHEN I view the main content,
- THEN I am presented with a list of blog posts that are pulled from localStorage.
- WHEN I view localStorage,
- THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
- WHEN I take a closer look at a single blog entry in the list,
- THEN I can see the title, the content, and the author of the post.
- WHEN I view the footer,
- THEN I am presented with a link to the developer's portfolio.

## Resources

- Link that helped me create the blog form: https://www.w3schools.com/html/html_forms.asp
- Link that helped me create JSON.parse https://www.w3schools.com/js/js_json_parse.asp 
- Helped create my for loop for the username, content, and title https://www.w3schools.com/js/js_loop_for.asp 
- appendChild help on blog.js https://www.w3schools.com/jsref/met_node_appendchild.asp 
- help on form,js for local storage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
- Had a tutoring session Thursday (25th) to help me get the toggle button and back button to work and help with some styling connections on css

## Link to Deployed content 

https://bwolkoys.github.io/Module4-Blog/ 