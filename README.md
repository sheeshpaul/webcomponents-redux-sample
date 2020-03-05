# How It Works
This sample app domonstrates usage of [webcomponents-redux](https://github.com/sheeshpaul/webcomponents-redux) binding package for connecting Web Components to [Redux](https://github.com/reduxjs/redux). The app has a Counter Web Component, which is connected to Redux through webcomponents-redux bindings. The component implements mapStateToProps for handling state change, and mapDispatchToProps for dispatching actions. This app uses ES Modules and has the build system. For the version of this app which includes required packages as script tag and does not use any build system see [webcomponents-redux-script-sample](https://github.com/sheeshpaul/webcomponents-redux-script-sample).

# Quick Start Guide
- [Installation](#installation)
- [Development Workflow](#development-workflow)

## Installation

**1. Clone this repo**
```sh
git clone --depth 1 https://github.com/sheeshpaul/webcomponents-redux-sample.git
cd webcomponents-redux-sample
```

**2. Install the dependencides**
```sh
npm install
```

## Development Workflow

**3. Start the local server**
```sh
npm run start
```

## License
MIT