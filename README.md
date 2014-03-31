# Angular slack [![Build Status](https://travis-ci.org/polem/angular-slack.svg?branch=master)](https://travis-ci.org/polem/angular-slack)

## Installation

`npm install --save angular-slack`

add `angular-slack` module to your app depedencies

## Usage

```js
var message = {
  'text':'Hello world',
  'channel':'@someone',
  'username':'angular-slack'
};

Slack.notify('myteam', 'token', message);
```

## Build

`gulp`

## Test

`gulp test`

