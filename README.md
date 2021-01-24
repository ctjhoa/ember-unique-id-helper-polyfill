ember-unique-id-helper-polyfill
==============================================================================

This addon provides a polyfill for unique-id helper as described in [RFC 659](https://github.com/emberjs/rfcs/pull/659).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-unique-id-helper-polyfill
```


Usage
------------------------------------------------------------------------------

Example:
```hbs
{{#let (unique-id) as |emailId|}}
  <label for={{emailId}}>Email address</label>
  <input id={{emailId}} type="email" />
{{/let}}

{{#let (unique-id) as |passwordId|}}
  <label for={{passwordId}}>password</label>
  <input id={{passwordId}} type="password" />
{{/let}}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
