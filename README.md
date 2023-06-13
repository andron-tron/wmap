# wmap

## MVP

### Use Case
![Use Case Diagram](https://drive.google.com/uc?export=view&id=14mzhnIIoAZV0AwH1g-8g-aBCiEqxgxf2)

### Допущения
**Распорядитель** будет использовать Google Sheet для CRUD списка гостей, рассадки и общей информации.
Приложение будет получать списки из Google Sheet он-лайн асинхронным запросом.

Генерация QR кодов: Операция единоразовая,может быть выполненна заранее. Будет выполнятся в ручном режиме, например через он-лайн сервисы или локально готовым скриптом.
Каждому гостю будет присвоен уникальный ID (далее GID) который будет передаваться параметром http запроса для каждого гостя, например:

```html
https://andron-tron.github.io/wmap/?gid=<guest ID>
```


### Project documents
[Google Drive (project prototype)](https://drive.google.com/file/d/14pSdid6EznoWOgVRfoT195nuxSw1CiiK/view?usp=drive_link)

[https://geojson.io/](https://geojson.io/)

### Setup

https://andron-tron.github.io/wmap - MainPAGE
```html
https://andron-tron.github.io/wmap/?g=<guest ID>
```


