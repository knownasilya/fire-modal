# bootstrap-modal

Bootstrap Modal (w/ animation) addon for Ember CLI

[![Build Status](https://travis-ci.org/knownasilya/bootstrap-modal.svg)](https://travis-ci.org/knownasilya/bootstrap-modal)
[![npm version](https://badge.fury.io/js/bootstrap-modal.svg)](https://badge.fury.io/js/bootstrap-modal)  
[![Ember Observer Score](http://emberobserver.com/badges/bootstrap-modal.svg)](http://emberobserver.com/addons/bootstrap-modal)

## Usage

### Installation


```no-highlight
ember install bootstrap-modal
```

:warning: This addon requires Ember version __2.3+__.

### Using

Usually you will want to create custom components based on this component, since
every ones needs are different. The following is a simple example of what you can do.

```hbs
{{#if showModal}}
  {{#bootstrap-modal
    close=(action 'toggleShowModal')
    closeOnOverlayClick=true
    dialogClass='my-dialog'
  as |modal|}}
    {{#modal.header}}
      <h4 class='modal-title'>Test</h4>
    {{/modal.header}}

    {{#modal.body}}
      Test
    {{/modal.body}}

    {{#modal.footer as |close|}}
      <button onclick={{action close}} type='button' class='btn btn-primary'>
        Close
      </button>
    {{/modal.footer}}
  {{/bootstrap-modal}}
{{/if}}
```

The `toggleShowModal` is an action that toggles the `showModal` boolean.

If you have your own `app/transitions.js`, then you will need to add the modal transition
like the example below, otherwise, the transition should just work.

```js
// app/transitions.js

import defaultTransition from 'bootstrap-modal/utils/default-transition';

export default function () {
  // bootstrap-modal transition
  defaultTransition(this);

  // other transitions here..
}
```

### Install Bootstrap

The above instructions will make the modal functional, but it will not
look like the bootstrap modal. The following instructions will help you
get the styles setup.

First install the bootstrap dependency:

```no-highlight
npm install bootstrap@3 --save-dev
```

Edit your `ember-cli-build.js` to look similar to the following:

```js
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  // The actual styles, which make the modal look good!
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');

  // The scripts are not necessary for the modal, but you might want them for other
  // bootstrap features.
  app.import('node_modules/bootstrap/bootstrap/dist/js/bootstrap.js');

  // Any other imports you might have..

  return app.toTree();
};
```

Note: If you're using LESS or SASS, then you can import
those files in your styles. This would also help if you only want
the modal styles and want to pick and choose your files.

### API

* `close` - Action. The action attribute for closing the modal, e.g. `close=(action 'closeModal')`. The action will have it's first argument
  set to `true` if the modal was closed by clicking the overlay.
* `closeOnOverlayClick` - Boolean. Flag enabling triggering the close via clicking the overlay/backdrop.
* `dialogClass` - String. Custom CSS class that will be applied to the modal-dialog in order to enable custom styling.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide.
