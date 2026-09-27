# Project Screenshots & Media Assets

Place project screenshot image files in this folder (`src/assets/projects/`).

### Recommended Naming Conventions:
1. **Yummy Recipe Website**:
   - `yummy-recipe.png` (or `.jpg`, `.webp`)
2. **Personal Budgeting App**:
   - `budgeting-app.png` (or `.jpg`, `.webp`)
3. **Adaptive AI Study Planner**:
   - `study-planner.png` (or `.jpg`, `.webp`)

### How to Link Screenshots in `src/content/portfolioContent.ts`:
Once an image file is added to `src/assets/projects/` (or `public/projects/`), update the `image` field in `portfolioContent.projects.items`:

```ts
image: '/src/assets/projects/yummy-recipe.png',
```
Or if placed in `public/projects/`:
```ts
image: './projects/yummy-recipe.png',
```

If an image is `null` or undefined, a tasteful architectural schematic placeholder is automatically rendered, preserving full layout stability with zero layout shift.
