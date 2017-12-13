# Coding

## Project structure
* `css/` Contains custom css related to project
* `ang/civicase/*.html` Contains Angular templates for project
* `ang/civicase/*.js` Contains Angular scripts for project

## Guidelines for Styling
* No change should be done as part of shoreditch theme if, it's not globally related to vanilla CiviCRM
* all templates must wrapped in `#bootstrap-theme` in end output 

#### No ad-hoc changes
The styling is meant to be as generic as possible, and as such no site/extension specific changes and/or components should be added to it.

#### Add a custom styling as a last resort
Adding a custom styling to achieve a specific design should be considered as a last resort, when no suitable Bootstrap component had been found that could either be used as-is or being augmented with a custom modifier.

#### z-index management
This project is having many fixed and sticky objects so, all z-indexes should be managed properly.

* Sticky field z-index = menu z-index (Defaults to 600)
* Popup (ui-dialog) z-index = sticky field z-index + 3
* Popup overlay for ui-dialog z-index = sticky field z-index + 2
* Dropdown menu z-index = 1000 (default)
* Drodown menu in ui-dialog = default z-index + popup z-index

#### Dropdown menu convention
Civicase extension has all dropdown as `position: fixed` rather than having absolute.

## Guidelines for Angular
* All common components (i.e. sticky section) should be managed via directives.
* Any component creating templates should follow bootstrap guidelines.
* Functions should be well commented to give overview of usage.