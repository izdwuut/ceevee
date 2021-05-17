# Profile

For convience, you can fill in a profile that would get saved on your PC, offline. When creating a new resume, you have an option to clone linked data. It makes it simple to create several revisions of your document.

Profiles - you guessed it - are simply YAML files, structured the way we require. They allow only for pre-defined sections to be filled up. That's the sole reason we've created this feature - to provide a way to input common personal details.

## Structure

```yaml
firstName: Lorem
middleName: null
lastName: Ipsum
nickname: IS
experience:
  - :
    company: Lorem
    position: Ipsum
    from: 2019-02-03 # date in ISO format
    to: 2020-02-03
    description: Markdown-enabled description
  - :
    company: Lorem
    position: Ipsum
    from: 2019-02-03 # date in ISO format
    to: 2020-02-03
    description: Markdown-enabled description
education: # ...
project: # ...
hobbies: # ...
```