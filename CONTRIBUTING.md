# Contributing

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

## Development workflow

1. Navigate to one of the app directories (ie. `starter-app-ecommerce`)

⚠️ If you are using `final-app-ecommerce` be sure to add your write-key in `App.tsx` 
```
const segmentClient = createClient({
  writeKey: 'WRITE_KEY',
  trackAppLifecycleEvents: true,
  collectDeviceId: true,
});
```

2. Install dependencies 

```sh
yarn
```

3. Install pods 

```sh
cd ios && pod install
```

```sh
cd .. 
```

4. Build and run 

**iOS**
```sh
yarn ios
```

**Android**
```sh
yarn android
```

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.