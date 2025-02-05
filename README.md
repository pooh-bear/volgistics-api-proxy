# Volgistics API Proxy

A lightweight proxy for the Volgistics API, using the [volgistics-api-client](https://github.com/pooh-bear/volgistics-api-client) library. Securely proxies and abstracts the API for a single VicNet organization for use in other applications.

## Installation

### Docker
1. Clone the repository:

```bash
git clone https://github.com/pooh-bear/volgistics-api-proxy.git
cd volgistics-api-proxy
```

2. Add your environment variables to the `.env` file, or set them in the Docker Compose file:
```
AUTH_EMAIL=[Volgistics user email]
AUTH_PASSWORD=[Volgistics user password]
ORG_ID=[Volgistics organization ID, identifiable in the VicNet URL]
APP_API_KEY=[A secure API key of your choosing]
```

3. Run the server:
```bash
docker compose up -d
```

The server will be available at `http://localhost:13000`.


### Manually

1. Clone and install dependencies:
```bash
git clone https://github.com/pooh-bear/volgistics-api-proxy.git
cd volgistics-api-proxy
yarn
```

2. Create a `.env` file with the following variables:
```
AUTH_EMAIL=[Volgistics user email]
AUTH_PASSWORD=[Volgistics user password]
ORG_ID=[Volgistics organization ID, identifiable in the VicNet URL]
APP_API_KEY=[A secure API key of your choosing]
PORT=[Port to run the server on, defaults to 3000]
```

3. Run the server:
```bash
yarn start
```

## Usage

### Get Schedule

```bash
curl -H "Authorization: Bearer $APP_API_KEY" http://localhost:3000/schedule
```

### Get Schedule with Prefix

```bash
curl -H "Authorization: Bearer $APP_API_KEY" http://localhost:3000/schedule?prefix=Volunteer%20Services
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
GitHub [@pooh-bear](https://github.com/pooh-bear)

## Disclaimer
This API client is a user-maintained project and is in no way affiliated with Volgistics. 
Usage of this client is subject to Volgistics' [Terms of Use](https://www.volgistics.com/terms.htm). 
No warranties are implied or given. Use at your own risk.
