# React Native Comments App

A two-screen React Native application that fetches comments from a public API, displays them in a paginated list, and shows full details on selection.

---

## Features

* **Comments List** using FlatList (virtualized rendering)
* **Infinite Scroll Pagination** (10 items per page)
* **Loading States**

  * Full-screen loader on initial load
  * Footer loader during pagination
* **Error Handling** with Retry button
* **Navigation**

  * List → Detail screen
  * Data passed via params (no re-fetch)
* **Performance Optimizations**

  * `React.memo`
  * `useCallback`
  * Optimized FlatList props
* Clean and minimal UI

---

## Tech Stack

* React Native CLI
* TypeScript
* React Navigation (Native Stack)
* Fetch API
* React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`)

---

## API Used

* Endpoint: https://jsonplaceholder.typicode.com/comments

* Pagination support:

```
?_page=1&_limit=10
```

---

## Folder Structure

```
src/
 ├── api/            # API calls
 ├── components/     # Reusable UI components
 ├── hooks/          # Custom hooks (pagination logic)
 ├── navigation/     # Navigation setup
 ├── screens/        # App screens
 
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <https://github.com/AbhishekBawane/Comments-App>
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Android Setup

* Install Android Studio
* Install SDK & required tools
* Enable USB Debugging on device OR use emulator

---

### 4. Configure Android SDK Path

Create or update file:

```
android/local.properties
```

Add:

```
sdk.dir=C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\Sdk
```

---

## Run the App

### Start Metro Server

```bash
npx react-native start
```

---

### Run on Android

```bash
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

---

## Build APK (Release)

```bash
cd android
.\gradlew assembleRelease
```

APK location:

```
android/app/build/outputs/apk/release/app-release.apk
```

---

## Screenshots

### Comments List

<img width="400" height="750" alt="Comment List 1" src="https://github.com/user-attachments/assets/427ffe2d-a044-4639-a7ba-c88bea663539" />
<img width="400" height="750" alt="Comment List 2" src="https://github.com/user-attachments/assets/65e9ddae-bc76-4871-87ee-3d59b013b89b" />


### Comment Detail

<img width="400" height="750" alt="Comment Details" src="https://github.com/user-attachments/assets/b27158f2-80b5-42d7-a6d6-00ef3b94f793" />


---

## Assumptions

* API always returns valid data
* Network connection is available
* No authentication required

---

## Trade-offs

* No global state management (kept simple using hooks)
* No offline caching
* Minimal UI (focused on functionality)
* Basic error handling

---

## Future Improvements

* Search/filter by name or email
* Pull-to-refresh
* Dark mode support
* Offline storage (AsyncStorage)
* Unit tests

---

## Key Learnings

* Implementing efficient pagination using FlatList
* Managing loading and error states
* Optimizing performance in React Native
* Handling navigation with parameters
* Debugging real device issues (ADB, Metro, SDK)

---

## Author

**Abhishek Bawane**

---

## APK link

< https://drive.google.com/file/d/175CnpwkKTKUmav01XT_-OSxFT5c418uB/view?usp=sharing >

## Notes

* This project was built as part of a React Native practical interview task.
* Focus was on performance, clean architecture, and correct pagination logic.

---
