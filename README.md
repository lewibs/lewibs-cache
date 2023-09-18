# quick-cache

## Overview

This utility allows you to convert a function into a caching function, enhancing performance by storing and retrieving its output based on specified options. This can be especially useful when you have computationally expensive functions that are repeatedly called with the same arguments.

## Installation

You can install this utility via npm:

```bash
npm install quick-cache
```

## Usage

To use the caching utility, import it into your JavaScript code:

```javascript
const cache = require('quick-cache');

//or 

import {cache} from "quick-cache";
```

### Syntax

```javascript
const cachedFunction = cache(func, options);
```

### Parameters

- `func` (function): The function you want to turn into a caching function.
- `options` (Object): An optional object containing configuration options.

### Options

- `key` (Number): An integer value (0 to any number) indicating which parameter should be used to identify if the function should call from memory or run itself again. This parameter is optional and can be omitted if not needed.

### Example

```javascript
const expensiveCalculation = (a, b) => {
  console.log('Performing expensive calculation...');
  return a + b;
};

const cachedCalculation = cache(expensiveCalculation, { key: 0 });

console.log(cachedCalculation(2, 3)); // Calls the expensive calculation function and caches the result.
console.log(cachedCalculation(2, 3)); // Retrieves the result from the cache, avoiding a costly recalculation.
```

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/lewibs/quick-cache).

## License

This utility is released under the MIT License. See the [LICENSE](LICENSE) file for more information.