# WTForecast
### Simple weather forecast application.
---
![GitHub top language](https://img.shields.io/github/languages/top/cccaaannn/wtforecast?style=flat-square) ![](https://img.shields.io/github/repo-size/cccaaannn/wtforecast?style=flat-square) [![GitHub license](https://img.shields.io/github/license/cccaaannn/wtforecast?style=flat-square)](https://github.com/cccaaannn/wtforecast/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/cccaaannn/wtforecast?style=social)](https://github.com/cccaaannn/wtforecast/network/members)

<br>

### Visit [WTForecast](https://cccaaannn.github.io/WTForecast/) website

<br>

### Run WTForecast on Docker
* Change the `homepage` from the `package.json` before building.
```shell
docker build -t cccaaannn/wtforecast --build-arg OPENWEATHERMAP_API_KEY=<YOUR_OPENWEATHERMAP_API_KEY> .
docker run -d -p 80:80/tcp --name WTForecast cccaaannn/wtforecast
```

