# Config 

Your regular settings. On technical side: we use Redux to store them, so they are available application-wide. They are contained in a `config` slice.

We put some effort into making the application accessible. Related options are limited, but we felt the urge to add them anyways.

## General

`language` - a language selected from a list of installed language packs.

`theme` - a theme selected from a list of installed themes

`textDirection` - either LTR or RTL

`loadPrevious` - if `true`, skips the main screen and loads the last project on startup

## Accessibility

`contrastMode` - loads a high contract theme

`fontSize` - adjusts the font size

