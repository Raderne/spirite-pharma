## Table of Contents

- Description
- Usage
- Variants
- API

## Description

The Button component is a versatile and customizable button component that provides a consistent and accessible user interface for various actions within the application. It supports different visual styles (variants) and sizes to match the design needs of the application.

## Usage

The Button component can be used as a traditional button element or as a child of another component, providing flexibility for custom layouts.

**Example usage as a standard button element:**

```tsx
import { Button } from './Button'

const MyButton = () => {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  )
}
```

**Example usage as a child of another component:**

```tsx
import { Button, Slot } from './Button'

const MyComponent = () => {
  return (
    <div>
      <Slot>
        <Button variant="default" size="default">
          Click me
        </Button>
      </Slot>
    </div>
  )
}
```

## Variants

The Button component supports various visual styles (variants) and sizes:

### Visual Styles (Variants)

| Variant | Description |
|---|---|
| default | Solid background and contrasting text color |
| destructive | Red background and white text color, indicating destructive action |
| outline | Transparent background with a border and contrasting text color |
| secondary | Light gray background and darker gray text color |
| ghost | Transparent background with no border, and text color that changes on hover |
| link | Underlined text that changes color on hover |

### Sizes

| Size | Description |
|---|---|
| default | Regular size |
| sm | Small size |
| lg | Large size |
| icon | Square size suitable for icons |

## API

| Prop | Type | Description |
|---|---|---|
| className | string | Additional CSS class names to apply to the button |
| variant | string | Variant of the button (default, destructive, outline, secondary, ghost, link) |
| size | string | Size of the button (default, sm, lg, icon) |
| asChild | boolean | Whether the button should be rendered as a child of another component |
| ...props | object | Additional props to pass to the underlying button or Slot component |

## Examples

### Default button

```tsx
<Button variant="default" size="default">
  Click me
</Button>
```

### Destructive button

```tsx
<Button variant="destructive" size="default">
  Delete
</Button>
```

### Outline button

```tsx
<Button variant="outline" size="default">
  Cancel
</Button>
```

### Secondary button

```tsx
<Button variant="secondary" size="default">
  Save
</Button>
```

### Ghost button

```tsx
<Button variant="ghost" size="default">
  Edit
</Button>
```

### Link button

```tsx
<Button variant="link" size="default">
  Read more
</Button>
```