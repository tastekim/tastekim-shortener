# Tastekim-Shortener
긴 url 을 가독성이 좋은 짧은 url 로 바꾸어주는 모듈입니다.
개인적으로 운영하는 서버를 통해 생성하고 있으며 일정 click count 를 체크해서 expire 하고 있습니다.
[Buy Me a Coffee](https://www.buymeacoffee.com/tastekim)
## Install
```
npm install tastekim-shortener
```
## Usage

```typescript
import { TastekimShortener } from 'tastekim-shortener';

const url = 'http://github.com/tastekim';
const result = await TasteShortener(url);

console.log(result);

```

## Warning
짧은 시간 동안에 shorten url 을 다량 생성하게 되면 대기 시간이 생깁니다.
