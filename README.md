# Get collecting with My Pretty Unicorn Collector!

![Unicorns](https://cdn.dribbble.com/users/141427/screenshots/2072640/lu_dribble_1x.png)

Let's create our very own unicorn app, where we can see a list of unicorns, add new unicorns to our list, and go to individual unicorn show pages.

## Part 1

Right now, we can't see any of the unicorns from our server on the page. The `UnicornListPage` will be your primary, top-level component to start. Let's update it to retrieve our data of unicorns with fetch.

- Familiarize yourself with the `UnicornList` component.
- Fetch the unicorns from the backend such that they display on the page.
- After receiving the unicorns in the of our fetch, ensure that they display on the page correctly within `UnicornTile` components. `UnicornTile` components should only show the names of unicorns.

## Part 2

We want to add new unicorns to our collection because you can never have enough. Let's make a form component, that will eventually POST to the backend to persist our new unicorn.

- Your unicorn form should be rendered by the UnicornListPage
- Ensure that what is typed into the form is persisted in state
- Ensure that your input fields are **controlled** and that any change to state changes what is displayed in those form fields. Use the `value` property of the input field as needed.
- Be able to submit the form, such that it makes a post request to the backend to persist our new unicorn.
- After the response is returned from fetch, take the newly persisted unicorn from the backend and add it to state, such that the screen updates with your new unicorn without needing a page refresh.

## Part 3

I wish to see ONLY one unicorn on a page, where I can see all of the little details about a unicorn. We'll need a show page and react router to help us make our dreams come true.

- Define routes in `App.js` such that the router renders our app. Going to `"/"` or `"/unicorns"` should render the UnicornListPage.
- Define a route for the `/unicorns/:id`, such that a new component, `UnicornDetailsPage` is rendered on the screen
- The `UnicornDetailsPage` should display the `name` and `description` of our respective unicorn. We'll need to use fetch to retrieve the data for this specific unicorn.
- Be sure to add a `Link` component, so that each `li` in our unicorns list is a link to the appropriate unicorn's show page.
