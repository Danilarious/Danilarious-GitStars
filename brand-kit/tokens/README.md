# Danilarious Tokens

The token architecture has been modernized from flat CSS Custom Properties to a hierarchical JSON schema. This ensures the brand logic can be programmatically distributed to CSS, SCSS, iOS, or Android via a tool like Style Dictionary.

## Architecture
1. **Core Data (`src/core.*.json`):** Holds the primitive values (raw hex codes, exact pixel math, scale values).
2. **Semantic Data (`src/semantic.*.json`):** Defines the purpose of the core tokens (e.g., mapping `{color.yellow.base}` to `{semantic.action.primary}`).

*Note: The root level CSS files (e.g., `colors.css`) are maintained temporarily for backward compatibility with older HTML prototypes. New agents/tools should read the JSON files.*
