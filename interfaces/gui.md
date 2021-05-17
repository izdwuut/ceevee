# GUI



## Template editor

This is out of initial scope, but it should be fairly easy to implement it with our template format. We'd need to double check it prior to starting the development, though.

## Edit resume form (with an option to import profile settings)

This is just a form. What's crucial, we should allow for adding custom sections.

It would be cool if we allowed for using markdown editor.

(This is a cool one) The form is being rendered based on sections definition in a template! With the current template format, rendering is trivial.

## Styles editor (CSS)

Like, edit font of a field, it's color, or any other property that the template author has foreseen. It's the main point - we don't want to allow for _every_ CSS rule. This would be a madhouse.

## Resume Preview

* Dragging
* Zooming in and out
* Resetting the scale
* Undo changes?

Not too much of a hassle. We need to handle rendering the template. This means, we need to make sure we are able to convert pixel values to centimeters (since the generated resume pages are in A4 format). This should happen automatically, though, thanks to relative units in CSS, like `%`, `vh` etc.
