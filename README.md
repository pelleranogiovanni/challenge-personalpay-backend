<h1 align="center">PERSONAL PAY</h1>
<h2 align="center">Developer Applicant Interview Test - Backend</h2>


## INSTALAR DEPENDENCIAS 
```
npm i
```

## VARIABLES DE ENTORNO 

```
Si se va a levantar en entorno local, se debe crear el archivo .env en la raiz del proyecto y configurar las siguientes variables:
PORT
API_KEY_OPENWEATHERMAP (key de la api de openweathermap.org)
URL_BASE_OPENWEATHERMAP="https://api.openweathermap.org/data/2.5/"
URL_BASE_IPAPI="http://ip-api.com/json/"
```

## CORRER SERVER
```
npm run dev
```

## CONSIDERACIONES 
```
Si se va a probar de forma local: 
    - Agregar el header "x-forwarded-for" con alguna ip de prueba
    - O bien, utilziar la coleción de Postman que se encuentra en la raiz del proyecto
```

## CURL DE EJEMPLOS
```
curl --location --request GET 'http://localhost:3000/v1/location' \
--header 'x-forwarded-for: 181.13.173.3'
curl --location --request GET 'http://localhost:3000/v1/current' \
--header 'x-forwarded-for: 181.13.173.3'
curl --location --request GET 'http://localhost:3000/v1/current?city=Villa Angela' \
--header 'x-forwarded-for: 181.13.173.3'
curl --location --request GET 'http://localhost:3000/v1/forecast' \
--header 'x-forwarded-for: 181.13.173.3'
curl --location --request GET 'http://localhost:3000/v1/forecast?city=Villa Angela' \
--header 'x-forwarded-for: 181.13.173.3'
```
## ENTORNO DE PRUEBA
```
El servicio ya se desplegó a heroku para que se pueda utilizar y probar 
https://challenge-personalpay-backend.herokuapp.com/

curl de prueba en heroku
curl --location --request GET 'https://challenge-personalpay-backend.herokuapp.com/v1/location' 
curl --location --request GET 'https://challenge-personalpay-backend.herokuapp.com/v1/current' 
curl --location --request GET 'https://challenge-personalpay-backend.herokuapp.com/v1/current?city=Villa Angela' 
curl --location --request GET 'https://challenge-personalpay-backend.herokuapp.com/v1/forecast' 
curl --location --request GET 'https://challenge-personalpay-backend.herokuapp.com/v1/forecast?city=Villa%20Angela'
```