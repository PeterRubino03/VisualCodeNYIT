# Question 5: Restaurant Menu Page

## Prompt

**Create an HTML page and CSS stylesheet that matches the provided image.**

You will create two files:
- `menu.html` — the HTML page
- `menu.css` — the linked stylesheet

Your page is a restaurant menu with two sections. One section has a "Popular" badge positioned in the corner. Menu items have names on the left and prices floated to the right. A link at the bottom is styled as a full-width button. Study the image carefully and recreate the layout.

## Reference Values

**Colors (reused across elements):**
- Brown (headings, subtitle, hr, section border, badge background, prices, button background): `#8B4513`
- Badge/button text: `#FFFFFF` (white)
- Body text: `#333333`
- Section background: `#FFFFFF` (white)
- List item bottom border: `#F0E0D0`
- Page background: `#FFF8F0`

**Fonts:**
- Body: `Georgia, "Times New Roman", serif` at `11pt`
- H1: `24pt`, centered
- H2: `16pt`
- Badge: `10pt`, bold
- Button link: `14pt`

**Layout Details:**
- Body margin: `20px`
- The subtitle ("Open Daily...") uses a class `subtitle` — centered, italic, colored `#8B4513`
- Horizontal rules have a `1px solid #8B4513` border
- Each menu category is a div with class `menu-section` — `position: relative`, `#FFFFFF` background, `1px solid #8B4513` border, `15px` padding, `15px` top/bottom margin
- The "Popular" label uses a class `badge` — `position: absolute`, `top: -10px`, `right: 10px`, `#8B4513` background, `#FFFFFF` text, `3px` top/bottom and `10px` left/right padding. Only the first section has this badge.
- Menu item names use a span with class `item` — bold
- Prices use a span with class `price` — `float: right`, colored `#8B4513`
- The `ul` has `list-style: none` and `padding: 0`
- Each `li` has `5px` top/bottom padding and a `1px solid #F0E0D0` bottom border
- The "Order Online" link uses a class `order-btn` — `display: block`, centered text, `#8B4513` background, `#FFFFFF` text, `10px` padding, `15px` top margin, no underline
