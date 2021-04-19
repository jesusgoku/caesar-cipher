# Caesar Cipher

NodeJS CLI for work with Caesar Cipher

## Setup

```bash
yarn install
npm install
```

## Running

```bash
# Show command help
node src --help

# Encode
node src encode <shift> <message>
echo <message> | node src <shift>

# Decode
node src decode <shift> <message>
echo <message> | node src encode <shift>

# Crack
node src crack <message>
echo <message> | node src crack
```
