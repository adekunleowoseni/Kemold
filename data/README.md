# Glasses collection

Edit `glasses.json` to add or update products. The shop page loads this via `GET /api/glasses`.

## Adding glasses from Telegram

1. **POST** to your site: `POST /api/glasses` with a JSON body for the new product.
2. If `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set, the API sends the new product JSON to your Telegram chat so you can copy it into `glasses.json` and redeploy.

Example product (add to the `glasses` array):

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "price": "$199",
  "priceNumber": 199,
  "desc": "Material • Shape",
  "image": "https://...",
  "alt": "Description for accessibility",
  "badge": "New",
  "badgeClass": "bg-primary",
  "colors": ["bg-black", "bg-slate-400"],
  "ageGroup": "adults",
  "frameShape": "rectangle",
  "material": "acetate"
}
```

- **ageGroup**: `"kids"` | `"teens"` | `"adults"`
- **frameShape**: `"rectangle"` | `"round"` | `"cat-eye"` | `"aviator"` | `"oval"` | `"square"`
- **material**: `"acetate"` | `"metal"` | `"titanium"` | `"sustainable"`

Filter checkboxes on the shop use these values.
