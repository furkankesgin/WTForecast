# WTForecast
### Simple weather forecast application.
---
![GitHub top language](https://img.shields.io/github/languages/top/furkankesgin/wtforecast?style=flat-square) ![](https://img.shields.io/github/repo-size/furkankesgin/wtforecast?style=flat-square) [![GitHub license](https://img.shields.io/github/license/furkankesgin/wtforecast?style=flat-square)](https://github.com/furkankesgin/wtforecast/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/furkankesgin/wtforecast?style=social)](https://github.com/furkankesgin/wtforecast/network/members)

<br>

### Visit [WTForecast](https://furkankesgin.github.io/WTForecast/) website

<br>

### Run WTForecast on Docker
* Change the `homepage` from the `package.json` before building.
```shell
docker build -t furkankesgin/wtforecast --build-arg OPENWEATHERMAP_API_KEY=<YOUR_OPENWEATHERMAP_API_KEY> .
docker run -d -p 80:80/tcp --name WTForecast furkankesgin/wtforecast
```

