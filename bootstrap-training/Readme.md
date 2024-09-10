### visit Bootstrap website :[ www.getbotstrap.com](https://getbootstrap.com/docs/5.0/getting-started/introduction/)


### 1, Add bootstrap CSS link into your head beore all other stylesheets to load our CSS.

### 2, Bundle JS links under body


# Bootstrap CSS Overview

Here’s an overview of each of the Bootstrap components listed, along with simple examples for each:

## 1. Container
A `.container` provides a responsive, fixed-width container. Use `.container-fluid` for full-width containers.

```html
<div class="container">
  <h1>This is a Bootstrap container</h1>
</div>
```

## 2. Buttons
Buttons can be styled using different classes like `.btn-primary`, `.btn-success`, etc.

```html
<button type="button" class="btn btn-primary">Primary Button</button>
```

## 3. Dropdowns
Dropdowns are toggled by clicking, using the `.dropdown-toggle` and `.dropdown-menu` classes.

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action 1</a></li>
    <li><a class="dropdown-item" href="#">Action 2</a></li>
  </ul>
</div>
```

## 4. Cards
Cards allow for flexible content containers with options for headers, footers, and more.

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
  </div>
</div>
```

## 5. Alert
Alerts are used for displaying different types of messages, such as success, danger, warning, etc.

```html
<div class="alert alert-success" role="alert">
  This is a success alert!
</div>
```

## 6. Spinners
Bootstrap spinners provide a way to indicate loading or processing.

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## 7. Progress Bar
Progress bars indicate the status of a process, such as loading or uploads.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
</div>
```

## 8. Collapse
Collapse components allow for the toggling of elements with smooth transitions.

```html
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button">
  Toggle Collapse
</a>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Collapsible content
  </div>
</div>
```

## 9. Accordions
Accordions can show and hide content by expanding and collapsing sections.

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        This is the content of the first accordion.
      </div>
    </div>
  </div>
</div>
```

## 10. Navigation Bar
Navigation bars are highly customizable and can contain links, dropdowns, and more.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
    </ul>
  </div>
</nav>
```

## 11. Rows and Columns
Bootstrap uses a grid system with rows and columns to create layouts.

```html
<div class="container">
  <div class="row">
    <div class="col">
      Column 1
    </div>
    <div class="col">
      Column 2
    </div>
  </div>
</div>
```

## 12. Rows and Columns Nested
Nesting columns within other columns is possible.

```html
<div class="row">
  <div class="col">
    Main Column
    <div class="row">
      <div class="col">Nested Column 1</div>
      <div class="col">Nested Column 2</div>
    </div>
  </div>
</div>
```

## 13. Tables
Bootstrap provides table styling using `.table`.

```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John</td>
      <td>Doe</td>
    </tr>
  </tbody>
</table>
```

## 14. Forms
Bootstrap offers various form styles, such as input fields, labels, and form groups.

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
</form>
```

## 15. Modals
Modals are dialog pop-ups that appear on top of the main content.

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        Modal content here.
      </div>
    </div>
  </div>
</div>
```

## 16. Hide and Show Based on Screen Size
You can hide or show content depending on the screen size using responsive utility classes like `.d-none`, `.d-sm-block`, etc.

```html
<div class="d-none d-md-block">
  This will be visible only on medium screens and larger.
</div>
``` 

These examples cover the basic use of each Bootstrap component.

