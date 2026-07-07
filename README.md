# The Beer Game - Initial Project Setup

This guide provides the necessary steps to set up and run the Beer Game application locally for development and testing.

## Prerequisites
Make sure you have the following installed:
- **Node.js** (version 22 is recommended)
- **Firebase CLI** (installed globally via `npm install -g firebase-tools`)

---

## Initial Setup

### 1. Install Dependencies
Install dependencies for both the frontend (root directory) and the backend (functions directory):

```bash
# Install frontend dependencies
npm install

# Install backend Cloud Functions dependencies
cd functions
npm install
cd ..
```

### 2. Configure Local Secrets
Before running the local Firebase emulator, you must set up your local secrets:

1. Copy the example secrets file:
   ```bash
   cp functions/.secret.local.example functions/.secret.local
   ```
2. Open `functions/.secret.local` and customize the variables:
   - `ADMIN_EMAIL`: The email address you want to use for the Instructor/Admin account.
   - `SMTP2GO_API_KEY`: Dummy key or a valid SMTP2GO API key for local mail emulation.
   - `MAIL_FROM`: Sender display name and email address for system emails.
   - `APP_BASE_URL`: Local app URL (defaults to `http://127.0.0.1:5173`).

---

## Running the Application Locally

To test the application locally, you need to run both the Firebase Emulators and the frontend server:

### 1. Start Firebase Emulators
Start the local Firebase emulators (Firestore, Cloud Functions, and Auth):
```bash
firebase emulators:start
```

### 2. Start the Frontend Dev Server
In a separate terminal window, start the Vite development server:
```bash
npm run dev
```

