Если изменился домен Drupal Api, его необходимо поменять в config\DbConfig.php baseUrlApi

Перед началом работы в папке config, надо создать файл config.json с следующим содержимим

Локальный
{
  "baseUrlApi": "http://localhost:8081/gordinsky-com",
  "file": {
    "upload_dir": "/gordinsky-com/web/public/images/"
  },
  "public_url": "/gordinsky-com/web/public/",
  "base_url": "/gordinsky-com/web/",
  "mailer": {
    "email": "zina.nikita.send@gmail.com",
    "pass": "MBO0@Y$5BodQ"
  }
}

Бета
{
  "baseUrlApi": "http://beta.gordinsky.com",
  "file": {
    "upload_dir": "/web/public/images/"
  },
  "public_url": "/web/public/",
  "base_url": "/web/",
  "mailer": {
    "email": "zina.nikita.send@gmail.com",
    "pass": "MBO0@Y$5BodQ"
  }
}