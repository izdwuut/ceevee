# Versioning

Every file we generate is versioned using the semantic versioning convention. This allows us to migrate [saves](concepts/save) when updating the software version. We write converters to achieve that. If we introduce a breaking change, these little tools are there to aid us in keeping everything in place. They are basically mappers - a translation layer between two incompatible versions. If we are unable to write a converter between two incompatible versions, we will make sure to let you know in advance that upgrading the software would result in losing your precious work.

We use semver to version our CLI interface, too. After all, this is the API we expose to you. GUI interface is just a layer on top of that.
