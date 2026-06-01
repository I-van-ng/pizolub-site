<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Pizolub Gabon

This project contains the Pizolub website.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Configure your local environment variables if needed
3. Run the app:
   `npm run dev`

## Production / Deployment

1. Build the client and server:
   `npm run build`
2. Start the compiled backend:
   `npm start`
3. Make sure these variables are set on your host:
   `PORT`, `APP_URL`, `CORS_ORIGIN`, `CONTACT_EMAIL`, and `SMTP_*` if email sending is enabled.

## Deploy On Render

1. Push this repo to GitHub.
2. Create a new Web Service on Render and connect the repo.
3. Render will use `render.yaml` with `npm run build` and `npm start`.
4. Add `CONTACT_EMAIL` and the `SMTP_*` variables if you want email delivery instead of local JSON storage.
5. `APP_URL` and `CORS_ORIGIN` are optional now because the server reads `RENDER_EXTERNAL_URL` on Render.
6. If you keep the JSON fallback, note that `data/*.json` is ephemeral unless you attach a persistent disk.
