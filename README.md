# база знаний сообщества fhir-ru

[сайт](http://fhir-ru.zendoc.me)

## установка на mac

1. открыть terminal

2. установить Command Line Tools для xcode (если не установлены)
```
xcode-select --install
```
Во всплывающем окне нажать установить, дождаться окончания установки.

3. установить brew

3.1 Скопировать команду установки в терминал

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3.2 Ввести пароль системного пользователя если потребуется.

3.3. Проверить brew
```bash
brew help
```
Для Mac с M1 если команда brew не найдена:

* проверить какая оболочка командной строки используется
```bash
echo $0
```
* если zsh - выполнить в терминале:
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```
* если bash - выполнить в терминале
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
```
* перезапустить терминал, проверить что brew работает через
```
brew help
```

4. установить git (если требуется)
```bash
brew install git
```
5. склонировать этот репозиторий
```bash
git clone https://github.com/fhir-ru/ru.core.git
```
6. установить java 8+
проверить установлена ли java можно через Java Control Panel или команду терминала
```bash
java -version
```
рекомендуем использовать сборку [adoptium](https://adoptium.net). также можно Oracle Java, OpenJDK
7. установить clojure
```bash
brew install clojure/tools/clojure
```

## запуск

1. перейти в склонированный репозиторий и в терминале вызвать:
```
git pull
```

```bash
clojure -M:run
```

2. перейти на http://localhost:8080

## сайт
изменения в репозитории автоматически разворачиваются на http://fhir-ru.zendoc.me
