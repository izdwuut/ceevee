# Template

We implement a common structure for templates. We decided on YAML, because it's a workhorse; it has everything we need to describe our format and store binded data.

We provide you with some nice pre-defined templates. When you decide on a template and start to draft your resume, under the hood we create a custom template cloned from the one you've picked up. This approach allows us to give you the possibility to adjust the layout to your needs, leaving the matrix intact.

Templates are [versioned](concepts/versioning). 

## Structure

```yaml
meta:
  author:
    name: Bartosz Konikiewicz
    email: bartosz.konikiewicz@gmail.com
    website: https://izdwuut.github.io
  license:
    type: MIT License
    text: https://example.com
  version: 0.1.0

# in an template selected by user, 
# copy all the data from parent
sections: 
  header: # override header section settings
    node: div
  custom1: # custom sections need to specify fields
    node: div
    arrray: false
    children:
      email:
        node: a
          props:
            href:
              name: Email
              # map to email field from the profile
              field: email.href
  custom2:
    name: Links
    node: div
    array: true # children acts as an array entry
    children:
      node: span # wrap children nodes
      link:
        node: a
        props:
          href:
            name: Link
            type: field
            control: EmailInput
            field: link.href
          text: # .innerText
            name: Label
            type: field
            control: TextInput # one of TextInput, DateInput, ...
            field: link.label

structure: # generates HTML markup
  body: # generates <div id="#body"></div>
    children: null # no children sections
    header: 
      children: # include header and details sections
        - header
        - details
    main:
      sidebar: # generates <div id="#sidebar"></div>
        children: 
          - skills
          - hobbies
      content:
        children:
          - experience
          - education
          - certificates
          - projects
          - custom1
    footer:
      visible: false # defaults to true
      column1: null # generates empty <div>. useful for styling
      column2: 
        children:
          - section2
      column3: 
        node: span # defaults to div

styles:
  definitions: # common definitions
    - fontFamily: Tahoma sans-serif
    - fontSize: 14px
  header: # linked to header declared in structure above
    definitions:
      - color: blue
    firstName:
      - fontSize: 14
  details:
    email:
      definitions:
        - textDecoration: none
        - color: black
```


