# React Modal Component

This React Modal Component is a user interface component for displaying overlay modals on top of the main page. It's designed to be flexible and customizable.

## Installation

You can install this Modal component via npm or yarn. Make sure to include the installation command.

```bash
npm i @dimss/oc-p14-modal

```

## Usage

To use this Modal component, import it into your JavaScript/React code.

```javascript
import { Modal } from "@dimss/oc-p14-modal";

// Usage of the Modal component
```

### Basic Usage Example

```javascript
<Modal
  shown={modalShown}
  close={() => {
    toggleModal(false);
  }}
  children={<h1>Employee created</h1>}
/>
```

### Properties

The Modal component accepts the following properties:

- `shown` (boolean, required): Indicates whether the modal is open.
- `Close` (function, required): A callback function that will be called when the user requests to close the modal.
- `children` (string,required) : String to add to customise the text insde the modal.

## Customization

You can customize the style and behavior of the modal using classes such as modal-content.

## Questions and Issues

If you have questions or encounter issues with this React Modal component, please report them on the GitHub repository's issues page.

```

```
