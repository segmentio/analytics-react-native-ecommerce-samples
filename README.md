# Analytics React Native E-Commerce Samples

The apps in this repository were built in conjunction with the [Implementing React Native 2.0 blog post](https://segment.com/blog/analytics-react-native-2-blog/). Check out the blog for a detailed overview of the new architecture and complete implementation guide. 

## Usage

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Code of Conduct

Before contributing, please also see our [code of conduct](CODE_OF_CONDUCT.md).

## License

MIT
