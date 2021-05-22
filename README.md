# /talkiiing React UI

The component library for fast and accessible development of gorgeous interfaces.

## 🚀 Usage

Install

```sh
npm i @talkiiing/react-ui
```

Inside `tailwind.config.js`

```js
const merge = require('@talkiiing/ui/config')
module.exports = merge({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
```

Use components inside your project

```js
import { BasicComponent } from '@talkiiing/ui'

function App() {
  return <BasicComponent name="talkiiing" />
}

export default App
```

## 🔌 Contributing

- Fork
- Clone
- `npm install`
- `npm run storybook`

It will start a local server at `localhost:6006` with all components rendered.
