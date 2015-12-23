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

### Using

Usually you will want to create custom components based on this component, since
every ones needs are different. The following is a simple example of what you can do.

```hbs
{{#if showModal}}
  {{#with (action 'toggleShowModal') as |toggle|}}
    {{#bootstrap-modal close=(action toggle) closeOnOverlayClick=true}}
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close" {{action toggle}}>
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Test</h4>
      </div>

      <div class="modal-body">
        Content Here
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" {{action toggle}}>
          Close
        </button>
      </div>
    {{/bootstrap-modal}}
  {{/with}}
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

### API

* `close` - Action. The action attribute for closing the modal, e.g. `close=(action 'closeModal')`. The action will have it's first argument
  set to `true` if the modal was closed by clicking the overlay.
* `closeOnOverlayClick` - Boolean. Flag enabling triggering the close via clicking the overlay/backdrop.


## Developing

Follow the steps below to start the dummy app, and work on contributing
to this addon.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
