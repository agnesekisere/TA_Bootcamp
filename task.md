
# Step 1: Create a Simple HTML Page

## Create a New File:

- Open Visual Studio Code.
- Save a new file as `index.html`.

## Add Basic HTML Structure with Elements:

Copy and paste the following code into your `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive HTML Page</title>
</head>
<body>
    <h1 class="header">Welcome to the Interactive Page</h1>
    
    <section class="main-section">
        <p class="description">This is a paragraph inside the main section.</p>
        
        <input type="text" class="input-field" placeholder="Enter text here">
        <button class="submit-button">Submit</button>
        <button class="action-button">Do Something</button>
        <button class="reset-button">Reset</button>
    </section>
</body>
</html>
```

### Explanation:

- `<h1 class="header">`: A header element with the class `header`.
- `<section class="main-section">`: A section containing other elements.
- **Input and Buttons**: Elements with specific classes for easy selection.

## Save and Open the File:

- Save the file.
- Open `index.html` in your web browser to view the page.

# Step 2: Add Inline CSS

## Insert a `<style>` Tag in the `<head>` Section:

Update your `index.html` to include inline CSS styles:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive HTML Page</title>
    <style>
        .header {
            color: blue;
            text-align: center;
        }
        .main-section {
            background-color: #f0f0f0;
            padding: 20px;
        }
        .description {
            font-size: 18px;
        }
        .input-field {
            width: 200px;
            margin-bottom: 10px;
        }
        .submit-button, .action-button, .reset-button {
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <!-- Rest of your HTML code -->
</body>
</html>
```

### Explanation:

- **Styling Classes**: Styles are applied to elements using their class names.

## Save and Refresh:

- Save the changes.
- Refresh the page in your browser to see the new styles applied.

# Step 3: Add Inline JavaScript

## Add a `<script>` Tag Before the Closing `</body>` Tag:

Modify your `index.html` to include inline JavaScript that executes on button clicks:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive HTML Page</title>
    <style>
        <!-- Your existing CSS styles -->
    </style>
</head>
<body>
    <h1 class="header">Welcome to the Interactive Page</h1>
    
    <section class="main-section">
        <p class="description">This is a paragraph inside the main section.</p>
        
        <input type="text" class="input-field" placeholder="Enter text here">
        <button class="submit-button">Submit</button>
        <button class="action-button">Do Something</button>
        <button class="reset-button">Reset</button>
    </section>

    <script>
        // Function to execute when 'Do Something' button is clicked
        document.querySelector('.action-button').addEventListener('click', function() {
            // Disable the input field
            document.querySelector('.input-field').disabled = true;

            // Hide the submit button
            document.querySelector('.submit-button').style.display = 'none';

            // Display an alert box
            alert('You clicked the Do Something button!');

            // Add goofy CSS class to the header
            document.querySelector('.header').classList.add('goofy');
        });

        // Function to execute when 'Reset' button is clicked
        document.querySelector('.reset-button').addEventListener('click', function() {
            // Enable the input field
            document.querySelector('.input-field').disabled = false;

            // Show the submit button
            document.querySelector('.submit-button').style.display = 'inline-block';

            // Remove the goofy CSS class from the header
            document.querySelector('.header').classList.remove('goofy');
        });
    </script>
</body>
</html>
```

### Explanation:

- **Event Listeners**: JavaScript functions that execute when buttons are clicked.
- **Manipulating Elements**: Disabling input fields, hiding/showing buttons, and adding/removing CSS classes.
- **Alert Box**: A simple pop-up message when the "Do Something" button is clicked.

## Save and Refresh:

- Save the file.
- Refresh the page in your browser.
- Click on the "Do Something" button to see the JavaScript in action.
- Use the "Reset" button to revert changes.

# Adding Goofy CSS Effects

## Goofy CSS Class:

Add in the `<style>` section:

```css
.goofy {
    animation: spin 2s infinite linear;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

This makes any element with the `goofy` class spin continuously.

## Applying the Goofy Class via JavaScript:

In the script, the `goofy` class is added or removed when buttons are clicked.

## Modify the Goofy CSS for More Fun:

Change the spinning animation to something else, like changing colors or sizes.

```css
.goofy {
    animation: colorChange 2s infinite alternate;
}
@keyframes colorChange {
    from { color: blue; font-size: 1em; }
    to { color: red; font-size: 2em; }
}
```

This will make the header text alternate between blue and red colors and change its size.


# Final Code Snippet

Here's the complete code with all the updates:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive HTML Page</title>
    <style>
        .header {
            color: blue;
            text-align: center;
        }
        .main-section {
            background-color: #f0f0f0;
            padding: 20px;
        }
        .description {
            font-size: 18px;
        }
        .input-field {
            width: 200px;
            margin-bottom: 10px;
        }
        .submit-button, .action-button, .reset-button {
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
            margin-right: 5px;
        }
        .goofy {
            animation: spin 2s infinite linear;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <h1 class="header">Welcome to the Interactive Page</h1>
    
    <section class="main-section">
        <p class="description">This is a paragraph inside the main section.</p>
        
        <input type="text" class="input-field" placeholder="Enter text here">
        <button class="submit-button">Submit</button>
        <button class="action-button">Do Something</button>
        <button class="reset-button">Reset</button>
    </section>

    <script>
        // Function to execute when 'Do Something' button is clicked
        document.querySelector('.action-button').addEventListener('click', function() {
            // Disable the input field
            document.querySelector('.input-field').disabled = true;

            // Hide the submit button
            document.querySelector('.submit-button').style.display = 'none';

            // Display an alert box
            alert('You clicked the Do Something button!');

            // Add goofy CSS class to the header
            document.querySelector('.header').classList.add('goofy');
        });

        // Function to execute when 'Reset' button is clicked
        document.querySelector('.reset-button').addEventListener('click', function() {
            // Enable the input field
            document.querySelector('.input-field').disabled = false;

            // Show the submit button
            document.querySelector('.submit-button').style.display = 'inline-block';

            // Remove the goofy CSS class from the header
            document.querySelector('.header').classList.remove('goofy');
        });
    </script>
</body>
</html>
```

# Summary

## HTML Elements:

- **Classes**: Used to style elements and select them with JavaScript.
- **Buttons**: Added "Do Something" and "Reset" buttons for interaction.

## CSS Styling:

- **Inline Styles**: Added in the `<style>` tag in the `<head>`.

## JavaScript Interactivity:

- **Event Listeners**: Functions that run when buttons are clicked.
- **DOM Manipulation**: Enables/disables elements, shows/hides elements, and modifies classes.


This exercise provides a foundational understanding of web page structure and behavior, which is essential for automating tests using tools like Playwright. Understanding how to select elements and trigger actions will help you write effective automated tests.
