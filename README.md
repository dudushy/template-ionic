# [template-ionic](https://github.com/dudushy/template-ionic/)
Template for Ionic projects.

```npm i```

# BUILD
ionic cordova build PLATFORM_NAME --aot
cordova clean && ionic cordova build PLATFORM_NAME --aot

# RUN
ionic cordova run PLATFORM_NAME --aot --livereload --device --consolelogs

# Clean
cordova clean

# Generate Page
ionic generate page PAGE_NAME

# Add/Remove Platform
ionic cordova platform add PLATFORM_NAME
ionic cordova platform rm PLATFORM_NAME

# List Plugins
cordova plugin list

# Add Plugins/Packages (NEVER DO THIS WHILE RUNNING)
ionic cordova plugin add PLUGIN_NAME
npm install PACKAGE_NAME

# Remove Plugins
cordova plugin remove PLUGIN_NAME
