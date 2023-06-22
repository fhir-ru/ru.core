# база знаний сообщества fhir-ru

[сайт](http://fhir-ru.zendoc.me)

## установка на mac

1. установить java 8+
проверить установлена ли java можно через Java Control Panel или команду терминала
```
java --version
```
2. установить пакетный менеджер brew через terminal
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
3. установить clojure
```
brew install clojure/tools/clojure
```

## запуск

1. в терминале вызвать команду

```bash
clojure -M:run
```

2. перейти на http://localhost:8080

## сайт
изменения в репозитории автоматически разворачиваются на http://fhir-ru.zendoc.me
