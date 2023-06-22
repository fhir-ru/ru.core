# база знаний сообщества fhir-ru

[сайт](http://fhir-ru.zendoc.me)

## установка на mac

1. склонировать этот репозиторий
```bash
git clone https://github.com/fhir-ru/ru.core.git
```
2. установить java 8+
проверить установлена ли java можно через Java Control Panel или команду терминала
```bash
java --version
```
3. установить пакетный менеджер brew через terminal
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
4. установить clojure
```bash
brew install clojure/tools/clojure
```

## запуск

1. перейти в репозиторий и в терминале вызвать команду

```bash
clojure -M:run
```

2. перейти на http://localhost:8080

## сайт
изменения в репозитории автоматически разворачиваются на http://fhir-ru.zendoc.me
