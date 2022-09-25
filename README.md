# [template-ionic](https://github.com/dudushy/template-ionic/)
Template for Ionic projects.

```
Ionic:

   Ionic CLI                     : 6.20.1 (C:\Users\User\AppData\Roaming\npm\node_modules\@ionic\cli)
   Ionic Framework               : @ionic/angular 6.2.8
   @angular-devkit/build-angular : 14.2.3
   @angular-devkit/schematics    : 14.2.3
   @angular/cli                  : 14.2.3
   @ionic/angular-toolkit        : 6.1.0

Cordova:

   Cordova CLI       : 11.0.0
   Cordova Platforms : not available
   Cordova Plugins   : not available

Utility:

   cordova-res : 0.15.4
   native-run  : 1.6.0

System:

   Android SDK Tools : 26.1.1 (C:\Users\User\AppData\Local\Android\Sdk)
   NodeJS            : v16.15.1 (C:\Program Files\nodejs\node.exe)
   npm               : 8.17.0
   OS                : Windows 10
```

```npm i```

# BUILD
<!--? ionic cordova build android --aot -->
<!--? ionic cordova build browser --aot -->
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
