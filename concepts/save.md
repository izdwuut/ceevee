# Save

We needed a way to persist user's work. We think that storing the data on our server would be a headache, so we decided that every source file should be stored on the user's computer. The downside of our approach is that it's _you_ who is responsible for backing them up.

On the bright side: the changes are being saved as you enter them. In case of emergency, we got you covered.

## Structure

Saves are simply YAML files. There is no need to create a file format of our own, when such a great tool already exists.

```yaml
meta:
  version: 0.1.0
  baseTemplate: Duhkha
sections:
  # copied/modified from template
template:
  # copied/modified from template
styles:
  # copied/modified from template
data:
  custom2:
    link:
      props:
        text: Lorem ipsum
        href: Lorem ipsum
```

Et voila.

Oh - saves are versioned. If the app updates and breaking changes are introduced to the format, we run converters to smoothly transfer the saves from previous format to the current one. It happens on startup, but you needs to confirm the action. If the template version is older than the Open Resume version, the template won't be loaded up.
